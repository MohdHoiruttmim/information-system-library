const { connection } = require('../config/config');

// =============== tab elemets ===============
const getBooks = (req, res) => {
  connection.query(
    'SELECT * FROM tbl_buku',
    (error, results) => {
      res.render('dashboard.ejs', 
      {results: [{
                  user: 'Test',   
                  level: 'Test session', 
                  params: req.query.tab,
                  books: results
                  // datas: await getBooks(),
                }]}
      );
    }
  )
}

const getUser = (req, res) => {
  connection.query(
    'SELECT * FROM tbl_login',
    (err, results) => {
      res.render('dashboard.ejs',
      {results: [{
                  user: 'Test', 
                  level: 'Test session', 
                  params: req.query.tab,
                  books: results
                  }]}
      );
    }
  )
}
// ====================== Export ======================

// ====================== Testing ======================
const test = async (req, res) => {
  console.log(req.query.tab)
  // console.log(req.params.tab)
  // console.log(await getBooks());
  // connection.query(
  //   'SELECT * FROM tbl_buku',
  //   (error, results) => {
  //     // console.log({results});
  //     res.render('dashboard.ejs', 
  //     {results: [{
  //                 user: 'Test', 
  //                 level: 'Test session', 
  //                 params: req.query.tab,
  //                 datas: results
  //                 // datas: await getBooks(),
  //               }]}
  //     );
  //   }
  // )
  if (req.query.tab === 'books'){
    getBooks(req, res);
  }
   else if(req.query.tab === 'users'){
    getUser(req, res);
  } else{
    res.render('dashboard.ejs', 
    {results: [{
                user: 'Test', 
                level: 'Test session', 
              }]}
    );
  }
  // console.log(getUser());
}
// ====================== Export ======================

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
          if (level === 'Petugas'){
            res.render('dashboard.ejs', {results});
            // test(req, res);
          } else {
            res.render('logged.ejs', {results});
          }
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

// const getUser = (req, res) => {
//   connection.query(
//     'SELECT user, email FROM tbl_login',
//     (error, results) => {
//       res.json({ results });
//       // return { results };
//     }
//   );
// };

// const getBooks = async (req, res) => {
//   connection.query(
//     'SELECT * FROM tbl_buku',
//     (error, results) => {
//       // console.log(results[0]);
//       res.json({ results });
//       // return results[0];
//     }
//   );
// }

module.exports = {
  test,
  homePage,
  // getUser,
  loginUser,
  getBooks,
  }