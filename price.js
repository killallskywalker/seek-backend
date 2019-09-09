'use strict'; 
/*
Class for handling all the calculation 
*/

class Price {

    constructor(userDetail,cartDetail){
        this.classicPrice = 269.99; 
        this.standoutPrice = 322.99; 
        this.premiumPrice = 394.99; 
        this.total = 0;
        this.userDetail = userDetail;
        this.cartDetail = cartDetail;
    }
    
    //get a for value for value deal 
    getFreeDeal(minItem,totalCart,promoStatus){
        if(promoStatus){
            return (totalCart > minItem) ? (totalCart - 1) * this.classicPrice : this.classicPrice * totalCart;
        }
        else{
            return this.classicPrice * totalCart;
        }
    }

    //get discount where price drops to value per ad
    getAddDiscount(totalCart,specificPrice,promoStatus){
        if(promoStatus){
            return (specificPrice!=null) ? totalCart * specificPrice : this.standoutPrice * totalCart;
        }
        else{
            return this.standoutPrice * totalCart;
        }
    }        

    //get discount for each ads where value ar more are purchased . price drops to value per ad 
    getPriceDrops(minItem,totalCart,newPrice,promoStatus){
        if(promoStatus){
            return  (minItem >= totalCart) ? newPrice * totalCart  : this.premiumPrice * totalCart;;
        }
        else{
            return this.premiumPrice * totalCart;
        }
    }
    
    //get total price of the cart and returning the total 
    getTotalPrice(){
        // console.log(this.userDetail);
        for (var key in this.userDetail) {
            if (this.userDetail.hasOwnProperty(key)) {
                if(this.userDetail[key].discount=='free-deal'){
                    // console.log(this.userDetail[key].status);
                    this.total = this.total + this.getFreeDeal(this.userDetail[key].minValue,this.cartDetail[key],this.userDetail[key].status);
                }
                else if(this.userDetail[key].discount=='discount-price'){
                    // console.log(this.userDetail[key].status);
                    this.total = this.total + this.getAddDiscount(this.cartDetail[key],this.userDetail[key].specificPrice,this.userDetail[key].status);
                }
                else if(this.userDetail[key].discount=='buy-more-discount'){
                    // console.log(this.userDetail[key].status);
                    this.total = this.total + this.getPriceDrops(this.userDetail[key].minValue,this.cartDetail[key],this.userDetail[key].specificPrice,this.userDetail[key].status);
                }
            }
        }

        return this.total;
    }
    
}

module.exports = Price;
