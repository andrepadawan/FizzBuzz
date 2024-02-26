/* When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number */
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
/* We wrapped the prompt call in a parseInt function so that a number is returned from the user’s input.*/

for (let i = 1; i <= answer; i++) {
    if (i%3 === 0 && i%5 === 0){//i è divisibile sia per 3 che per 5
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){ // i è divisibile per tre
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}