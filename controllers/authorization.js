const data = require('./../models/user');

const login = async (req, res)=> {
    console.log('data received from reactjs', req.body);
    const user = await data.findOne({ email: req.body.email, password: req.body.password}, 'first_name last_name email');
    res.json(user);
};

module.exports = {
    login
}

