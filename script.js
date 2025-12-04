// Part 1


// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”   
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
for (let i = 0; i <= 100; i++){
   console.log(i);

// If a number is divisible by 3, log “Fizz.”
   if(num % 3 === 0 && num % 5 === 0){
      console.log(num, "Fizz Buzz");
   } else if (num % 5 === 0) {
      console.log(num, "Buzz");
   } else if (num % 3 === 0) {
      console.log(num, "Fizz");
   } else {
      console.log(num);
   }
}

// Part 3 
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// if(char == '\n');