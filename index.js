let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

 // Stores the expression to evaluated

let string = ""; 
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = eval(string);

                // Update the display
                inputBox.value = string; 
            } catch {
                // Handle invalid input
                inputBox.value = "Error"; 
                string = ""; 
            }
        } else if (buttonValue === 'AC') {
            string = "";
            inputBox.value = string; 
        } else if (buttonValue === 'DEL') {

            // Remove last character
            string = string.substring(0, string.length - 1); 
            inputBox.value = string;
        } else {

            // Append button value to the expression
            string += buttonValue; 
            inputBox.value = string; 
        }
    });
});
