const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: { type: Date, default: Date.now },
    bdStatus: Boolean,
});

const role = new mongoose.model("role", roleSchema);
module.exports = role;