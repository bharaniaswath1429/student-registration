const express = require('express')
const app = express();
const bodyP = require('body-parser')

app.use(bodyP.json());
app.use(
    bodyP.urlencoded({
        extended: true,
    })
);

app.use(express.static('public'))

const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Student',
    password: 'Aswath!29',
    port: 5432,
});

client.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});

app.listen(8080, () => {
    console.log(`Server started at http://localhost:8080`)
});

app.post('/add', (req, res) => {
    console.log(req.body);
    const { fname, lname, email, phoneno, dob, gender, address1, address2, city, state, zipcode, country } = req.body;
    client.query('insert into studentregistration(fname, lname, email, phoneno, dob, gender, address1, address2, city, state, zipcode, country) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [fname, lname, email, phoneno, dob, gender, address1, address2, city, state, zipcode, country], function (err, results) {
      if (err) {
        throw err
      }
      res.sendFile(__dirname + '/thanks.html');
    })
    
     
})
 
app.get('/',function(req,res){
  res.sendFile('index.html',{root:__dirname});
})

app.get('/show', (req, res) => {
  client.query('select fname,lname from studentregistration', function (err, results) {
    if (err) throw err
    
    res.send(results.rows)
  })
})
  
