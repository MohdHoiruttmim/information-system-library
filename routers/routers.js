const express = require('express');
const { 
  homePage, 
  getUser, 
  loginUser,
  test,
} = require('../controllers/controller');
const router = express.Router();

router.get('/', homePage);
router.get('/user', getUser);
router.post('/home', loginUser)
router.get('/test', test)
router.get('/test/:tab', test)

module.exports = router;