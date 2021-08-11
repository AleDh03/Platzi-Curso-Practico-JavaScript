const calculateDiscountPrice = (price, discount) => {
    const discountedPricePercentage = 100 - discount;
    const  discountedPrice = (price * discountedPricePercentage) / 100;
        return discountedPrice
}

function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const discountedPrice = calculateDiscountPrice(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "The discounted price is: " + discountedPrice ;
}