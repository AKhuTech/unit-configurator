function localMSRP(exchangeRate){
    return localMSRPinLocalCurrency = function (MSRP){
        return Math.round(exchangeRate * MSRP) * 100 / 100;
    }
}

//test case 1
/* console.log(localMSRP(100)(95)); */

//test case 2
/* let localPrice = localMSRP(75);
for (i = 0; i < 10; i++){
    console.log(localPrice(i*100));
} */

function localMSRPinclVAT(VAT){
    return localMSRPmultVAT = function (MSRP){
        return (1 + VAT) * MSRP;
    }
}

function priceMSRP(margin){
    return priceInclMargin = function(EXW){
        return Math.round(EXW / (1 - margin)) * 100 / 100;
    }
}

function dealerPrice(dealerDiscount){
    return priceInclDealerDiscount = function(MSRP){
        return dealerDiscount * MSRP;
    }
}

function setPrice(price){
    price = Number.prototype.toFixed.call(parseFloat(price) || 0, 2);
    //заменяем точку на запятую
    let priceSep = price.replace(/(\D)/g, ",");
    //добавляем пробел как разделитель в целых
    priceSep = priceSep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return priceSep;
}  
