let numbers = [1,2,3,4,5];

let total = numbers.reduce( (number1, number2) => {
                        return number1 + number2;
                    }, 0);

console.log(total);