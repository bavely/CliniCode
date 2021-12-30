//NPMs
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const port = process.env.PORT || 1337
const app = express()
const Sequelize = require("sequelize")
const sql = require("mssql")
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./dist"));
app.use(cors())


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
    console.log("App listening on PORT " + port);
});



console.log("Server running at http://localhost:%d", port);