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


    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
       tipValue = output.innerHTML / 100;
       tipTotal = billTotal*tipValue;
       finalBill = (+tipTotal)+(+billTotal);
       calculatorDisplay2.textContent = (tipTotal);
       calculatorDisplay3.textContent = (finalBill);
    }

    

    buttonElement.addEventListener("click", () => {
        billTotal = inputElement.value; 
        tipTotal = billTotal*tipValue;
        finalBill = (+tipTotal)+(+billTotal);
        calculatorDisplay2.textContent = (tipTotal);
        calculatorDisplay3.textContent = (finalBill);
        return billTotal;
    })







    