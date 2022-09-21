const express = require('express');
const { connection } = require('./config/config');
const router = require('./routers/routers');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(router);

// to check connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

// reference: https://www.codekop.com/read/source-code-sistem-informasi-perpustakaan-dengan-codeigniter-3-61.html