let numbers = [1,2,3,4,5];  //an initial array

function isEven(item){
    return item %2 === 0;
};

function square(item){
    return item * item;
};

let filtered = numbers.filter(isEven);
let squared = filtered.map(square);
console.log(squared);


/*********** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** 
*                            HACIENDO TODO EN UN SOLO PASO
***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

let allTogether = numbers
                    .filter(isEven)
                    .map(square);

console.log(allTogether);