const express = require('express');
const { 
  homePage, 
  getUser, 
  loginUser,
  test,
  getBooks,
} = require('../controllers/controller');
const router = express.Router();

router.get('/', homePage);
router.get('/user', getUser);
router.post('/home', loginUser)
router.get('/test', test)
router.get('/books', getBooks)

module.exports = router;