let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        if (value === "AC") {
            expression = "";
            display.value = "0";
            return;
        }

        if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
            return;
        }

        expression += value;
        display.value = expression;
    });
});
