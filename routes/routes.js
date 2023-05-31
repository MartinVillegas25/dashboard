const { Router} = require('express');
const { homeForm, loginGet } = require('../controllers/routers');
const {partnerPost} = require('../controllers/usuarios');
const router = Router();



router.get('/', homeForm);
router.get('/login', loginGet);
router.post('/partner', partnerPost);



module.exports = router;
