function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}

//phone increase decrease events(first part)
document.getElementById('phone-plus').addEventListener('click', function () {
    // console.log('phone plus clicked');
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

//handle case increase decrease event(2nd part)
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);

    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
});
document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false);

    // const caseInput = document.getElementById('case-number')
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
})