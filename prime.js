const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const range = (start, stop, step) => {
    if(!step){step = 1}; arr = [];
    for(var i = start; i < stop; i += step){
        arr.push(i);
    }
    return arr;
}

function findPrimes(max){
    let wList = [2].concat(range(3, max + 1, 2));
    for(let number of wList){
        for (let divisor of range(2, parseInt(Math.pow(max, 0.5)) + 1)){
            if(number % divisor === 0 && number !== divisor){
                if(wList.includes(number)){
                    wList = wList.filter(val => val !== number);
                }
            }
        }
    }
    return wList;
}

readline.question("What is the max number?\n", num => {
    console.log(`The list of primes from 0 to ${num} is ${findPrimes(num)}`);
    readline.close();
});