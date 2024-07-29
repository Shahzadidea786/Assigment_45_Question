"use strict";
let friends = ["Juniad", "Asad", "Hassan", "Azeem"];
//we will use the forloop type (for of loop)
// (for of loop) main ya array ko same as is it list ki foam main output dayta 
// (for in loop) main  ya array ko elements index ki foam main output dayta hai 
// must be read if any issue(https://www.tutorialsteacher.com/typescript/for-loop)
for (let friend of friends) {
    console.log(`Hey ${friend} How are you!`);
}
/*
let arr = [10, 20, 30, 40];

for (let val in arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}
*/
/*let arr1 = [10, 20, 30, 40];

for (var index in arr1) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr1[index]); // prints elements: 10, 20, 30, 40
}
*/
