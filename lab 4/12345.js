let prev = null;
let increasing = true;
let decreasing = true;

while (true) {
    let num = prompt("Введіть число:");

    if (num === null) {
        break;
    }

    num = parseFloat(num);

    if (isNaN(num)) {
        alert("Ви ввели не число, спробуйте ще раз.");
        continue;
    }

    if (prev !== null && num !== prev) {
        increasing = increasing && (num > prev);
        decreasing = decreasing && (num < prev);

        if (!increasing && !decreasing) {
            alert("Послідовність не є монотонною.");
            break;
        }
    }

    prev = num;
}

if (increasing || decreasing) {
    alert("Послідовність є монотонною.");
}
