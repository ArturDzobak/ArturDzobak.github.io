let input, num, square;

do {
    input = prompt("Введіть число, для якого потрібно обчислити квадрат:");

    if (input !== null) {
        num = parseFloat(input);

        if (isNaN(num)) {
            alert("Введіть коректне число, спробуйте ще раз.");
        } else {
            square = num ** 2;
            alert(`Квадрат числа ${num} дорівнює ${square}.`);
        }
    }
} while (input !== null);
