const add = (a, b) => {
    return a + b;
};

const factorial = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++)
        result *= i;

    return result;
}

const divide = (a, b) => {
    if (b <= 0) {
        throw new Error('Second numbers have to be positive.');
    }

    return a / b;
}

