
const schedule = require('node-schedule');
const shell = require('shelljs');
const fs = require("fs")

let number = 0

schedule.scheduleJob('0 0 * * *', () => { 
    addNewData()
 })

function addNewData() {
    number++

    fs.appendFileSync("dummy.txt", `Day number ${number} of pushing :);\n`, "utf8")
    pushToGitHub()
}

function pushToGitHub() {
    shell.exec(`sh ../pushToGit.sh ${number}`)
}

module.exports = {
    addNewData,
    pushToGitHub,
}
