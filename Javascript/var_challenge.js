/*
Given the existing code below, can you write some code so that their values are switched around?

    var a = "3";
    var b = "8";

So that the variable a holds the value "8".

And the variable b holds the value "3".

When the code is run, it should output:

a is 8

b is 3

Do NOT change any of the existing code.

You are NOT allowed to type any numbers.

You should NOT redeclare the variables a and b. 

*/


function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var temp = a; // Store the value of a in a temporary variable
    a = b;        // Assign the value of b to a
    b = temp;     // Assign the value of the temporary variable (original a) to b
    a = a + b;      
    b = a.slice(0, a.length - b.length); 
    a = a.slice(b.length);
    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

