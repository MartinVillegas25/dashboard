const { response } = require('express');
 

const homeForm = (req, res = response) => {
  
    res.render('home');
}
const loginGet = (req, res = response) => {
    res.render('login');
}
module.exports = {
    homeForm,
    loginGet,
}