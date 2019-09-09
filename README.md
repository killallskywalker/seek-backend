### START PROJECT

- cd to seek-backend  and seek-client
- npm install 
- npm start 
- to run a test run npm test

- provided together with live url in case it does not work in your machine .

> http://seek-assesment.s3-website-ap-southeast-1.amazonaws.com/


### SEEK BACKEND SERVICES

- Provide backend services for Seek-Client
- Include with two endpoint that can be accessed by seek-client
- /add-to-cart
> add item to cart and return current price based on the total item  

- /get-user/parameter
> stimulate as customer login ,  use to get customer detail that need to be used to do checking on calculation total of cart based on customer preference . 

###HOW BACKEND SERVICES  WORKS
-  Dummy data stored in json object [ in real case scenarion it will be in database ]
-  Every customer have their preferences that define by seek admin 

> standout:{
      id:'standout',
      discount:'discount-price',
      minValue:0,
      specificPrice:null,
      status:false,
      price:price.standoutPrice

- status use to show the discount is active or not
- minValue require depends on type of discount
- specific price require depends on type of discount
- price , ads price 

- So everytime they have new requirement , they just only need to update customer preference to meet the requirement . 

###End
