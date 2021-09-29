/*
* Given an array of integers, calculate the ratios of its elements 
* that are positive, negative, and zero. Print the decimal value of 
* each fraction on a new line with  places after the decimal.
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const size = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i=0; i < size; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] === 0) {
            zero ++;
        } else {
            negative++;
        }
    }
    console.log((positive/size).toFixed(6));
    console.log((negative/size).toFixed(6));
    console.log((zero/size).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
