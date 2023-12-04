const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://harshdeepgill:harshdeepgill@cluster0.qbme72k.mongodb.net/phonebook?retryWrites=true&w=majority");

module.exports = {connection}