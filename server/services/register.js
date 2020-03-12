const db = require("../db");
const bcrypt = require('bcryptjs');
const config = require("../config");
const jwt = require("jsonwebtoken");


module.exports.register = (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, 8);
    const dob = req.body.dob;

    const user_details = new db.Register(
        {
            email: email,
            username: username,
            password: password,
            dob: Date.parse(dob)
        }
    );


    db.Register.findOne({ username: username},{password:0}, (err, data) => {
        if (data) {
            res.status(500).send("username already exists");
        }
        else {
            user_details.save(err => {
                if (err) {
                    if (err.errmsg.slice(60, 65))
                        res.status(500).send("email_id already exists");
                }
                else {
                    const token = jwt.sign({ id: user_details._id }, config.secret, { expiresIn: 60 });
                    res.status(200).send({ auth: true, token: token });
                }
            });
        }
    });
};

module.exports.me = (req, res, next) => {
    db.Register.findById(req.userId, { username: 1 }, (err, user) => {
        res.send(user)
    })
}