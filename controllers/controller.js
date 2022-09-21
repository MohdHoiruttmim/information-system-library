const { connection } = require('../config/config');

const homePage = (req, res) => {
  res.render('home.ejs', {isLoged: true});
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  connection.query(
    'SELECT user, pass, level FROM tbl_login WHERE user = ?',
    [username],
    (err, results) => {
      let isLoged = false;
      if (results.length !== 0){
        const { level, pass } = results[0];
        if (pass === password){
          console.log(results);
          res.render('logged.ejs', {results});
        } else {
          res.render('home.ejs', {isLoged});
        }
      } else {
        console.log('wrong username!', results);
        res.render('home.ejs', {isLoged});
      }
      // console.log(results)
    }
  )
};

const getUser = (req, res) => {
  connection.query(
    'SELECT user, email FROM tbl_login',
    (error, results) => {
      res.json({ results });
    }
  );
};

module.exports = { 
  homePage,
  getUser,
  loginUser,
 }