// btnPlus function
// document.getElementById("btnPlus").addEventListener("click", function () {
//     productChange(true);
// });
// document.getElementById("btnMinus").addEventListener("click", function () {
//     productChange(false);
// });
// document.getElementById("btnPlus").addEventListener("click", function () {
//     const phoneCount = document.getElementById("phoneCount");
//     const phoneCountInt = parseInt(phoneCount.value);
//     const phoneCountPlus = phoneCountInt + 1;
//     phoneCount.value = phoneCountPlus;
//     const phoneAmount = phoneCountPlus * 1219;
//     document.getElementById("phoneAmount").innerText = phoneAmount;
// })
// //btnMinus
// document.getElementById("btnMinus").addEventListener("click", function () {
//     const phoneCount = document.getElementById("phoneCount");
//     const phoneCountInt = parseInt(phoneCount.value);
//     const phoneCountPlus = phoneCountInt - 1;
//     phoneCount.value = phoneCountPlus;
//     const phoneAmount = phoneCountPlus * 1219;
//     document.getElementById("phoneAmount").innerText = phoneAmount;
// })
// function Maintain
function productChange(increase) {
    const phoneCount = document.getElementById("phoneCount");
    const phoneCountInt = parseInt(phoneCount.value);
    // const phoneCountPlus = phoneCountInt + 1;
    let phoneCountPlus = phoneCountInt;
    if (increase == true) {

        phoneCountPlus = phoneCountInt + 1;
    }
    if (increase == false && phoneCountInt > 0) {

        phoneCountPlus = phoneCountInt - 1;
    };
    phoneCount.value = phoneCountPlus;
    const phoneAmount = phoneCountPlus * 1219;
    document.getElementById("phoneAmount").innerText = phoneAmount;
};
function caseChange(increase) {
    const phoneCount = document.getElementById("caseCount");
    const phoneCountInt = parseInt(phoneCount.value);
    // const phoneCountPlus = phoneCountInt + 1;
    let phoneCountPlus = phoneCountInt;
    if (increase == true) {

        phoneCountPlus = phoneCountInt + 1;
    }
    if (increase == false && phoneCountInt > 0) {

        phoneCountPlus = phoneCountInt - 1;
    };
    phoneCount.value = phoneCountPlus;
    const phoneAmount = phoneCountPlus * 59;
    document.getElementById("caseAmount").innerText = phoneAmount;
};