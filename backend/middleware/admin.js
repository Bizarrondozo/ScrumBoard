const Role = require("../models/role");

const admin = async(req, res, next) => {
    let role = await Role.findById(req.params._id);
    if (!role) return res.status(400).send("Process failed: The role does not exist in the database");

    if (role === "admin")
        next();
    else
        return res.status(400).send("Process failed: Unauthorized user");
};

module.exports = admin;