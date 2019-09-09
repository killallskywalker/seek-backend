/*
user setting can be store together with user profile / user account as referal to discount they should receive ,
act as temp database to store data for demo purpose .
The discount of product can change anytime / add anytime by staff using some interface to change the rule of 
discount for every customer . 

for your referal - 
1 . free-deal - free deal price / discount type .
2 . discount-price - price change for product . 
3 . buy-more-discount - set price when buy ads more than certain value . 

This typee of discount can be add to any customer and when the status is false , 
there is no discount given , otherwise true theres indicate that the discount is enable.
*/
const Price = require('./price.js');

const price = new Price();

exports.default = {
    classic:{
      id:'classic',
      discount:'free-deal',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.classicPrice
    },
    standout:{
      id:'standout',
      discount:'discount-price',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.standoutPrice
    },
    premium:{
      id:'premium',
      discount:'buy-more-discount',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.premiumPrice
    } 
}

exports.unilever = {
    classic:{
      id:'classic',
      discount:'free-deal',
      minValue:2,
      specificPrice:null,
      status:true,
      price:price.classicPrice

    },
    standout:{
      id:'standout',
      discount:'discount-price',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.standoutPrice


    },
    premium:{
      id:'premium',
      discount:'buy-more-discount',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.premiumPrice

      
    } 
}
exports.apple = {
    classic:{
      id:'classic',
      discount:'free-deal',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.classicPrice

    },
    standout:{
      id:'standout',
      discount:'discount-price',
      minValue:0,
      specificPrice:299.99,
      status:true,
      price:price.standoutPrice

    },
    premium:{
      id:'premium',
      discount:'buy-more-discount',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.premiumPrice

    } 
}
exports.nike = {
    classic:{
      id:'classic',
      discount:'free-deal',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.classicPrice

    },
    standout:{
      id:'standout',
      discount:'discount-price',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.standoutPrice


    },
    premium:{
      id:'premium',
      discount:'buy-more-discount',
      minValue:4,
      specificPrice:379.99,
      status:true,
      price:price.premiumPrice

    } 
}
exports.ford = {
  classic:{
    id:'classic',
    discount:'free-deal',
    minValue:4,
    specificPrice:null,
    status:true,
    price:price.classicPrice

  },
  standout:{
    id:'standout',
    discount:'discount-price',
    minValue:0,
    specificPrice:309.99,
    status:true,
    price:price.standoutPrice

  },
  premium:{
    id:'premium',
    discount:'buy-more-discount',
    minValue:3,
    specificPrice:389.99,
    status:true,
    price:price.premiumPrice

  } 
}
exports.cartDefaultId = {classic:1,standout:1,premium:1}
exports.cartUnilever = {classic:3,standout:0,premium:1}
exports.cartApple = {classic:0,standout:3,premium:1}
exports.cartNike = {classic:0,standout:0,premium:4}
