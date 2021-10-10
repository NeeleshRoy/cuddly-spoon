'use strict';

const { count } = require('console');
const fs = require('fs');

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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    if (!Array.isArray(arr) || arr.length < 1) return [];
    const counted = [];
    let i = 0;
    while(i <= Math.max(...arr)) {
        counted.push(0);
        i++;
    }

    arr.forEach(val => {
        counted[val] += 1;
    })

    counted.forEach((val, index) => {
        console.log(val, index);
    })

    return counted;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
