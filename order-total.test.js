const Price = require('./price.js');
const DummyData = require('./dummyData');


const totalPriceDefaultId = new Price(DummyData.default,DummyData.cartDefaultId);
const totalPriceUnilever = new Price(DummyData.unilever,DummyData.cartUnilever);
const totalPriceApple = new Price(DummyData.apple,DummyData.cartApple);
const totalPriceNike = new Price(DummyData.nike,DummyData.cartNike);


it('Customer Default ID Test - classic , classic , classic , premium | 987.97' , ()=>{
    expect(totalPriceDefaultId.getTotalPrice()).toBe(987.97)
})

it('Customer Unilever Test  - standout , standout , standout , premium | 934.97 ', ()=> {
    expect(totalPriceUnilever.getTotalPrice()).toBe(934.97);
});

it('Customer Apple Test  - standout , standout , standout , premium | 1294.96', ()=> {
    expect(totalPriceApple.getTotalPrice()).toBe(1294.96);
});

it('Customer Nike Test - standout , standout , standout , premium | 1519.96', ()=> {
    expect(totalPriceNike.getTotalPrice()).toBe(1519.96);
});
