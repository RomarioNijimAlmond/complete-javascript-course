// //global scope


// function first() {
//     let age = 100;

//     function second() {
//         console.log(`${age}`);
//     }

//     console.log(second());
// }


// console.log(first());



// // Define a variable in the global scope:
// const fullName = "Oluwatobi Sofela";

// // Define nested functions:
// function profile() {
//   function sayName() {
//     function writeName() {
//       return fullName;
//     }
//     return writeName();
//   }
//   return sayName();
// }


// First fullName variable defined in the global scope:
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName; // "Oluwa Sofe";
    }
    return writeName();
  }
  return sayName(); // "Oluwa Sofe";
}

console.log(profile());