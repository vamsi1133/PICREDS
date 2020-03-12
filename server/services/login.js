const db = require("../db");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const config=require("../config")


module.exports.authenticate = (req, res) => {
    db.Register.findOne({ email: req.body.username }, (err, user) => {
        if (err) {
            return res.status(500).send("server error");
        }
        else {
            if (user) {
                let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (passwordIsValid) {
                    var token = jwt.sign({ id: user._id }, config.secret, {
                        expiresIn: 60
                    });
                    res.status(200).send({auth: true,token:token});
                }
                else {
                    res.status(403).send("password incorrect");
                }
            }
            else {
                res.status(404).send("user not found");
            }
        }
    });
}