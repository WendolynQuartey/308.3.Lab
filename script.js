// Part 1


// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”   
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// for (let num = 1; num <= 100; num++){
//    if (num % 3 === 0 && num % 5 === 0){
//       console.log(num, "Fizz Buzz");
//    } else if (num % 5 === 0) {
//       console.log(num, "Buzz");
//    } else if (num % 3 === 0) {
//       console.log(num, "Fizz");
//    } else {
//       console.log(num);
//    }
// }

// Part 3 
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// if(char == '\n');
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
let row = "";
let cell = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cur = 1;
for (let i = 0; i < csvData.length; i++) {
   if (csvData[i] != ',') {
      if (cur == 1) {
         cell1 += cell;
         cur++;

      }
      else if (cur == 2) {
         cell2 += cell;
         cur++;
      }
      else if (cur == 3) {
         cell3 += cell;
         cur++;
      }
      else if (cur == 4) {
         cell4 += cell;
         cur++;
      }

      else if (csvData[i] == "\n" && cur > 4) {
         row = cell1, cell2, cell3, cell4;
         console.log(row)
         cell1 = "";
         cell2 = "";
         cell3 = "";
         cell4 = "";
         cur = 1;
      }
   } else {
      cell += csvData[i];
   }

}



