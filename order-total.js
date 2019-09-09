const Price = require('./price.js');

//dummy data for user setting / user profile - we can set rule for price in user profile 
// const userUnilever = {
//     classic:{
//       discount:'free-deal',
//       minValue:2,
//       specificPrice:null
//     },
//     standout:{
//       discount:'dicount-price',
//       minValue:0,
//       specificPrice:299.99
//     },
//     premium:{
//       discount:'buy-more-discount',
//       minValue:4,
//       specificPrice:379.99
//     } 
// }

const userUnilever = {
    classic:{
      discount:'free-deal',
      minValue:0,
      specificPrice:null,
      status:false,
    },
    standout:{
      discount:'dicount-price',
      minValue:0,
      specificPrice:null,
      status:false,

    },
    premium:{
      discount:'buy-more-discount',
      minValue:0,
      specificPrice:null,
      status:false,
    } 
}

const cart = {classic:'1',standout:'1',premium:'1'}

const newPrice = new Price(userUnilever,cart);
const total = newPrice.getFreeDeal(2,3,true);
console.log(total);












