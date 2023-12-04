const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    label: String,
    booked_slots: Array
},
{
    versionKey: false
})

const userModel = mongoose.model("users", userSchema);

module.exports = {userModel}