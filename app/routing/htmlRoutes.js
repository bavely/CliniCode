var path = require("path");

module.exports = (app) => {


    // app.get("/", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../../dist/my-app/index.html"));
    // });


    app.use((req, res, next) => {

        res.sendFile(path.join(__dirname, "../../dist/index.html"))

    })
};