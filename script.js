// Part 1


// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”   
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
for (let num = 1; num <= 100; num++){
   if (num % 3 === 0 && num % 5 === 0){
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
let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// csvData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
let cell = "";
let row = "";

for (let i = 0; i < csvData.length; i++) {
   // console.log("csvData[i]: ", csvData[i]);
   cell += csvData[i]; // add the value of csvData at index i 
   // console.log("Cell: ", cell);
   if (csvData[i] == ','){ // check if the value of  csvData at index i is equal to the chracter ','
      row += cell;
      // console.log("Row: ", row);
      cell = "";
   }
   else if (csvData[i] == '\n' || i == csvData.length-1  ){
      row += cell;
      console.log(row);
      row = "";
      cell = "";
   } 
}


