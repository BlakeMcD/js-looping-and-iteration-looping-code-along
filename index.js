// Code your solutions in this file


function writeCards(blankArray,event) {
    let newArray = [];
    for (let i = 0; i < blankArray.length; i++)
    {
        newArray.push(`Thank you, ${blankArray[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;

}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}

console.log(countdown(10))