	const inputElement = document.getElementById("myInput");
    const buttonElement = document.getElementById("myButton");
    const tipFifteen = document.getElementById("tipFifteen");
    const tipTwenty = document.getElementById("tipTwenty");
    const tipTwentyFive = document.getElementById("tipTwentyFive");

    let calculatorDisplay = document.querySelector('h1');
    let tipValue = 0;
    let tipTotal = 0;
    let billTotal = 0;
    let finalBill = 0;

    buttonElement.addEventListener("click", () => {
        billTotal = inputElement.value; 
        console.log("User input:", billTotal)
        return billTotal;
    })

    tipFifteen.addEventListener("click", () => {
        tipValue = tipFifteen.value;
        tipTotal = billTotal*tipValue;
        finalBill = (+tipTotal)+(+billTotal);
        calculatorDisplay.textContent = ("Tip total: " + tipTotal + " " + "Total: " + finalBill);
        return tipValue;
    })

    tipTwenty.addEventListener("click", () => {
        tipValue = tipTwenty.value;
        tipTotal = billTotal*tipValue;
        finalBill = (+tipTotal)+(+billTotal);
        calculatorDisplay.textContent = ("Tip total: " + tipTotal + " " + "Total: " + finalBill);
        return tipValue;
    })

    tipTwentyFive.addEventListener("click", () => {
        tipValue = tipTwentyFive.value;
        tipTotal = billTotal*tipValue;
        finalBill = (+tipTotal)+(+billTotal);
        calculatorDisplay.textContent = ("Tip total: " + tipTotal + " " + "Total: " + finalBill);
        return tipValue;
    })


    