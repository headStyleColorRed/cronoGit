
const express = require("express")
const app = express();
const puerto = parseInt(process.env.PORT, 10) || 3005;
const bodyParser = require("body-parser")
const Cors = require("cors")

// Modules
const gitManager = require("./gitPusher.js")

// Middlewares
app.use(Cors());
app.use(bodyParser.urlencoded({extended: false}))

// Open port
app.listen(puerto, () => console.log("Listening port " + puerto))


// ++++++++++++++++ HTTP METHODS +++++++++++++++++++ //

app.get("/", (req, res) => {
	res.send("We are up and going!!")
})

app.get("/push", (req, res) => {
	gitManager.addNewData()
	res.send("File succesfully Updated")
})

