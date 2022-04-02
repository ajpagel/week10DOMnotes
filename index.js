/*find element by ID*/

//let button = document.getElementById('my-button');
//console.log(button);


/*find elements by tag name*/
let buttonsByTag= document.getElementsByTagName('button');
console.log(buttonsByTag);


/*find elements by class name*/
let buttonsByClassName= document.getElementsByClassName('my-class');
console.log(buttonsByClassName);

/*find elements by CSS selectors*/

let buttonsByCSSSelector = document.querySelectorAll('button.my-class');
console.log(buttonsByCSSSelector); //this will only find the buttons with the class my class

//change the string to find all my-class including the h1:

let buttonsByCssSelector = document.querySelectorAll('.my-class');
console.log(buttonsByCssSelector); 



