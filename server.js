const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const Price = require('./price.js');
const DummyData = require('./dummyData');

/*
 -I create two endpoint which is for add item to cart and to get specific user based on test case 
   where the specific user in real scenation will be handle by middleware and authentication . 
 -in this project also i included some package to be use together with lambda using serverless framework 
 to deploying it into lambda . 
 -you can access live by visiting this url 

 http://seek-assesment.s3-website-ap-southeast-1.amazonaws.com/

 1.I create a test for use case use the example given , to run test
 npm test 
 2.To run the backend services run 
 npm start 
 
*/

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// POST method route
app.post('/add-to-cart', function (req, res){
  //get cart value from post request
  const cart = req.body;
  const key = cart.userId;
  const newPrice = new Price(DummyData[key],cart);
  const price = newPrice.getTotalPrice();
  res.send(`${price.toFixed(2)}`);
})

//GET method to get user 
app.get('/get-user/:id', function(req, res) {
  //req.params.id to determine user type either default , ford, or otherwise
  const key = req.params.id;
  if (DummyData[key]!==undefined){
    res.json(DummyData[key]).end()
  }
  else{
    res.status(404).send("Customer Not Found").end();
  }
});

//im using this packgae for for serverless purpose -  
module.exports.handler = serverless(app);
