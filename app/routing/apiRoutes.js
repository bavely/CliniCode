// const sql = require("mssql");
const Sequelize = require('sequelize');
const config = require("../DB/Config");
const queries = require("../DB/Query");
const { q3 } = require("../DB/Query");
const { User } = require('../../models');
const { TherapyType } = require('../../models');
const { Prescription } = require('../../models');
const bcrypt = require('bcrypt');
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        const dir = 'uploads/prescriptions/' + req.body.userId
        fs.exists(dir, exist => {
            if (!exist) {
                return fs.mkdir(dir, error => callBack(error, dir))
            }
            return callBack(null, dir)
        })
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })
module.exports = function(app) {
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // getPrescriptionsByTherapyType //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //

    app.post("/getPrescriptionsByTherapyType", async(req, res) => {
        let therapyType = req.body;
        try {
            let Prescriptions = await Prescription.findAll({
                include: [
                    { all: true }
                    /* {model: User, as: 'PatientObject'},
                    {model: User, as: 'MdObject'} */
                ],
                /*  include: [{
                     model: User,
                 //  required: false
                    }], */
                /* include:[User], */
                where: {
                    TherapyType: therapyType
                }
            });
            return res.json(Prescriptions);
        } catch (err) {
            console.log("BBB");
            console.log(err)
            return res.status(400).send(err);
        }
    });

    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // createPrescription //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //

    app.post("/createPrescription", upload.array('file'), async(req, res) => {
        try {
            console.log('sssss22sss');
            console.log(req.body);
            console.log('ssssssss');
            let prescription = await Prescription.create({
                Patient: req.body.patient,
                TherapyType: req.body.type,
                MD: req.body.userId,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            // create  notifcation 
            // receiverts 
            // send notifcation
            return res.json(prescription);
        } catch (err) {
            console.log("Aaaaaaaaa");
            console.log(err)
            return res.status(400).send(err);
        }

    });
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // getTherapyTypes //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //

    app.post("/getTherapyTypes", async(req, res) => {
        console.log('1');
        try {
            let TherapyTypes = await TherapyType.findAll({
                attributes: [
                        'id', 'name'
                    ] // We had to list all attributes...
            });
            return res.json(TherapyTypes);
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }

    });


    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // getPatients //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //

    app.post("/getPatients", async(req, res) => {
        try {
            let patients = await User.findAll({
                attributes: [
                        'id', 'name'
                    ] // We had to list all attributes...
                    ,
                where: {
                    type: 1
                }

            });
            return res.json(patients);
        } catch (err) {
            return res.status(400).send(err);
        }
    });
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // register user //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //

    app.post("/register", async(req, res) => {
        console.log(req.body);
        console.log("Here")
        const hash = bcrypt.hashSync(req.body.password, 10);

        try {
            // create a new user with the password hash from bcrypt
            let user = await User.create(
                Object.assign(req.body, { password: hash })
            );

            // data will be an object with the user and it's authToken
            let data = await user.authorize();

            // send back the new user and auth token to the
            // client { user, authToken }
            return res.json(data);
            console.log(data)
        } catch (err) {
            return res.status(400).send(err);
            console.log(err)
        }
    });
    /* Login Route
    ========================================================= */
    app.post('/login', async(req, res) => {
        const { username, password } = req.body;
        console.log(req.body)
        console.log('in apiroutes.js ');
        // if the username / password is missing, we use status code 400
        // indicating a bad request was made and send back a message
        if (!username || !password) {
            return res.status(400).send(
                'Request missing username or password param'
            );
        }

        try {

            // we will cover the user authenticate method in the next section
            let user = await User.authenticate(username, password)

            return res.json(user);

        } catch (err) {
            return res.status(400).send('invalid username or password');
        }

    });

    /* Logout Route
    ========================================================= */
    app.delete('/logout', async(req, res) => {

        // because the logout request needs to be send with
        // authorization we should have access to the user
        // on the req object, so we will try to find it and
        // call the model method logout
        const { user, cookies: { auth_token: authToken } } = req

        // we only want to attempt a logout if the user is
        // present in the req object, meaning it already
        // passed the authentication middleware. There is no reason
        // the authToken should be missing at this point, check anyway
        if (user && authToken) {
            await req.user.logout(authToken);
            return res.status(204).send()
        }

        // if the user missing, the user is not logged in, hence we
        // use status code 400 indicating a bad request was made
        // and send back a message
        return res.status(400).send({ errors: [{ message: 'not authenticated' }] });
    });

    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // Search EMR //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    app.post("/api", function(req, res) {

        console.log(req.body)

        const sequelize = new Sequelize(config.DB1.database, config.DB1.user, config.DB1.password, {
            host: config.DB1.server,
            dialect: 'mssql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },

        });
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        queries.q2(req.body.FName, req.body.LName, req.body.MRN);
        console.log(queries.q2(req.body.FName, req.body.LName, req.body.MRN))
            // console.log(req.body.FName, req.body.LName, req.body.MRN)
        sequelize.query(queries.q2(req.body.FName, req.body.LName, req.body.MRN)).then(myTableRows => {

            console.log(myTableRows)
            res.send(myTableRows)
        })
    });

    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // Search CliniVoy //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //


    app.post("/cliniapi", function(req, res) {


        console.log(req.body)

        const sequelize = new Sequelize(config.DB2.database, config.DB2.user, config.DB2.password, {
            host: config.DB2.server,
            dialect: 'mssql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },

        });
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        // console.log(req.body.FName, req.body.LName, req.body.MRN)
        sequelize.query(queries.q4(req.body.FName, req.body.LName, req.body.MRN)).then(myTableRows => {

            console.log(myTableRows)
            res.send(myTableRows)
        })

    });

    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // Set Data in CliniVoy From EMR //
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //


    app.post("/clinisetapi", function(req, res) {


        console.log(req.body)

        const sequelize = new Sequelize(config.DB2.database, config.DB2.user, config.DB2.password, {
            host: config.DB2.server,
            dialect: 'mssql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },

        });
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        // console.log(req.body.FName, req.body.LName, req.body.MRN)
        sequelize.query(queries.q5(req.body.FirstName, req.body.LastName, req.body.MedicalRecordNo)).then(myTableRows => {

            console.log(myTableRows)
            res.send(myTableRows)
        })

    });

    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // Set Data in EMR From CliniVoy//
    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //


    app.post("/ctsetapi", function(req, res) {


        console.log(req.body)

        const sequelize = new Sequelize(config.DB2.database, config.DB2.user, config.DB2.password, {
            host: config.DB2.server,
            dialect: 'mssql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },

        });
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        // console.log(req.body.FName, req.body.LName, req.body.MRN)
        sequelize.query(queries.q6(req.body.FirstName, req.body.LastName)).then(myTableRows => {

            console.log(myTableRows)
            res.send(myTableRows)
        })

    });


    //--------------------------------------------------- Add New Patient Into CliniVoy ---------------------------------------//
    app.post("/AddPtApi", function(req, res) {

        console.log(req.body)

        const sequelize = new Sequelize(config.DB2.database, config.DB2.user, config.DB2.password, {
            host: config.DB2.server,
            dialect: 'mssql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        });
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        // console.log(req.body.FName, req.body.LName, req.body.MRN)
        sequelize.query(queries.q7(req.body.postData.FName, req.body.postData.LName, req.body.postData.DOB, req.body.postData.email, req.body.PtAddress.A, req.body.PtAddress.B, req.body.PtAddress.C, req.body.PtAddress.D, req.body.PtAddress.E, req.body.postData.cphone, req.body.postData.hphone))
            .then(myTableRows => {

                console.log("Here Is RES" + "  " + myTableRows)

            })
    })
}