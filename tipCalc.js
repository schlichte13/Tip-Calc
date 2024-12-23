	const inputElement = document.getElementById("myInput");
    const buttonElement = document.getElementById("myButton");
    const tipButtons = document.querySelectorAll("button");

    let calculatorDisplay = document.querySelector('h1');
    let tipValue = 0;
    let tipTotal = 0;
    let billTotal = 0;
    let finalBill = 0;

    buttonElement.addEventListener("click", () => {
        billTotal = inputElement.value; 
        //console.log("User input:", billTotal)
        return billTotal;
    })

    tipButtons.forEach((tipButtons) => {
        tipButtons.addEventListener("click", () => {
            tipValue = tipButtons.value;
            tipTotal = billTotal*tipValue;
            finalBill = (+tipTotal)+(+billTotal);
            calculatorDisplay.textContent = ("Tip total: " + tipTotal + " " + "Total: " + finalBill);
        })
    });




    