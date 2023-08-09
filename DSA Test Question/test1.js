// Question 1 Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.


//moving all zeroes to the end while maintaining relative order of the number

// function moveZeroes(nums){
//     let p1 = 0; // p1 = pointer one 
//     let p2 = 0; // p2 = pointer two

//     //move all non-zero elements to the begninning of the array


//     while (p1 < nums.length) {
//         if( nums[p1] !== 0) {
//             nums[p2] = nums[p1];
//             p2++;
//         }

//         p1++;
//     }

//     //fill the remaining positions with zeros

//     while (p2 < nums.length) {
//         nums[p2] =0;
//         p2++;
//     }
// }
 
// // example
// const nums= [0 , 1 , 0 , 3 , 12 ];
// moveZeroes(nums);
// console.log(nums);

//------------------------------------------------------------------------------------------------
//Question 2 First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


//here is the pseudo code i have tried if it is wrong then give me feedback with the correct way

// To find the first non-repeating character in a string and return its index , we can use the following pseudo code

// 1. create an empty map to store each character's frequency in the string
//2. iterate through the string character by character
// 3. for each character , check if it is existing in the map or not 
// => if it does not exist , add it to the map  with the frequency  in the string 
// => if it already exist , increment its frequency in the map
// 4 iterate through the string again 
// => for each character check its frequency in the map 
// => return the index of the first character with  a frequency of 1
// if no charater has a afrequency of 1 , return -1 


// here is the javascript code

// function firstUniqueChar(s){
//     const charFrequency = new Map()

//     // count the frequency of each characteer 
//      for ( let i = 0; i < s.length ; i++){
//         const char = s[i];
//         charFrequency.set(char , (charFrequency.get(char) || 0) +1 );
//      }

//      // finding the first non-repeating characterr 

//      for (let i = 0 ; i < s.length ; i++){
//         const char = s[i];
//         if ( charFrequency.get(char) === 1 ){
//             return i
//         }
//      }

//      // non repeeating character found
//      return -1;
// }

// //example 

// const s = "loveletcode"
// console.log(firstUniqueChar(s));

//--------------------------------------------------------------------------------------------------------------

