const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    emailOrUsername : String,
    password : String,
    fullname : String,
})

const User = mongoose.model("User", userSchema);
module.exports = User
