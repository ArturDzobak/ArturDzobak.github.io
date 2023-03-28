let k = prompt("Введіть число:");

if (isNaN(k)) {
    alert("Ви ввели не число, спробуйте ще раз.");
} else {
    k = parseInt(k);

    for (let i = 1; i <= 10; i++) {
        let result = k * i;
        console.log(k + " x " + i + " = " + result);
    }
}
