let billAmountVar = document.getElementById("billAmount");
let percentageTipVar = document.getElementById("percentageTip");
let tipAmountVar = document.getElementById("tipAmount");
let totalAmountVar = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");

function buttonClick() {
    let billAmountRs = billAmountVar.value;
    let percentageTip = percentageTipVar.value;
    if (billAmountRs === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
        tipAmountVar.value = "";
        totalAmountVar.value = "";
    } else if (percentageTip === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
        tipAmountVar.value = "";
        totalAmountVar.value = "";
    } else {
        let billAmountRs = parseInt(billAmountVar.value);
        let percentageTip = parseInt(percentageTipVar.value);
        let percentageToValue = (billAmountRs * percentageTip / 100);
        tipAmountVar.value = percentageToValue;
        let totalValueToPrint = billAmountRs + percentageToValue;
        totalAmountVar.value = totalValueToPrint;
        errorMessage.textContent = "";
    }
}
