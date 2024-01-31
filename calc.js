const calcScreen = document.querySelector(".calc-screen");
let expression = "";


function isOperator(keyElement) {
    return keyElement.dataset.jsOperator;
}

function updateCalcScreen(string) {
    // If the expression is empty - display "0" on the screen
    if (expression === "") {
        calcScreen.textContent = "0";
        return;
    }

    calcScreen.textContent = string;
}

document.querySelectorAll(".calc-key:not([data-control-button])").forEach((key) => {
    key.addEventListener("click", (event) => {
        const keyElement = event.target;

        /* 
        If a button is responsible for any operator, the text content of the button that will be added to the expression may not always be recognizable to JS. 

        Ex: "x" for multiplication should be "*". So for each
        button responsible for an operation I attached the JS operator representation.
        */
        let keyContent = isOperator(keyElement) ? keyElement.dataset.jsOperator : 
        keyElement.textContent;

        expression += keyContent;
        updateCalcScreen(expression);
    })
})

document.querySelectorAll(".calc-key[data-control-button]").forEach((key) => {
    key.addEventListener("click", (event) => {
        const keyType = event.target.dataset.controlButton;

        switch (keyType) {
            case "Del":
                expression = expression.slice(0, -1);
                updateCalcScreen(expression);
                break;
            case "Reset": 
                expression = "";
                updateCalcScreen(expression);
                break;
            case "Result":
                try {
                    // If expression is empty, just evaluate it as 0. 
                    expression = eval(expression || "0").toString();
                    updateCalcScreen(expression);
                } catch {
                    updateCalcScreen("Syntax Error")
                }
                break;
        }
    })
})