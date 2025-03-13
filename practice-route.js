const express = require("express")

const route = express.Router()

const practiceController = require("../controller/practice-controller")

// route.post

route.post("/addpracticedoc",practiceController.addPracticeMern)
route.post("/getpractice",practiceController.getPractice)
route.post("/updatepractice",practiceController.updatePractice)
route.post("/deletepractice",practiceController.deletepractice)

module.exports = route;