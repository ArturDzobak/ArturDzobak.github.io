let sum = 0;
let count = 0;
let input;

do {
    input = parseFloat(prompt("Введіть число:"));

    if (!isNaN(input)) {
        sum += input;
        count++;
    }
} while (sum <= 100);

alert(`Кількість введених чисел, коли їхня сума перевищила 100: ${count}`);
