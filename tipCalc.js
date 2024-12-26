	const inputElement = document.getElementById("myInput");
    const buttonElement = document.getElementById("myButton");
    const tipButtons = document.querySelectorAll("button");

    let calculatorDisplay = document.getElementById("sub");
    let calculatorDisplay2 = document.getElementById("tip");
    let calculatorDisplay3 = document.getElementById("total");
    let tipValue = 0;
    let tipTotal = 0;
    let billTotal = 0;
    let finalBill = 0;

    buttonElement.addEventListener("click", () => {
        billTotal = inputElement.value; 
        return billTotal;
    })

    tipButtons.forEach((tipButtons) => {
        tipButtons.addEventListener("click", () => {
            tipValue = tipButtons.value;
            tipTotal = billTotal*tipValue;
            finalBill = (+tipTotal)+(+billTotal);
            calculatorDisplay.textContent = (billTotal);
            calculatorDisplay2.textContent = (tipTotal);
            calculatorDisplay3.textContent = (finalBill);
        })
    });




    