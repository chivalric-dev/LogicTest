/**Define an array of numbers (use any random numbers). 
 * Write a program to print only the even numbers of the array. 
 * Do not use any library functions, need to do via for loops only
 */

function myFunction(){
var array = [1,2,3,4,5,6,7,8,9,10];
 for( i=0; i<=array.length; i++)
 {
     if(array[i]%2==0)
     {
         console.log(array[i]);
     }
 }
}

myFunction();