// btnPlus function
const btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener("click",function(){
    const inputValue = document.getElementById("inputValue").value++;
    const inputNumber = parseFloat(inputValue);
    const phoneAmount = document.getElementById("phoneAmount").innerText;
    const phoneAmountfloat = parseFloat(phoneAmount);
    const newAmount = phoneAmountfloat * inputNumber ;
    document.getElementById("phoneAmount").innerText = newAmount;
})
