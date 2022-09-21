const express = require('express');
const { 
  homePage, 
  getUser, 
  loginUser,
} = require('../controllers/controller');
const router = express.Router();

router.get('/', homePage);
router.get('/user', getUser);
router.post('/home', loginUser)

module.exports = router;