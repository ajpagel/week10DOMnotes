//to see change add button with event listener
let button= document.getElementById('btn');
let content= document.getElementById('content');


//change hello paragraph to goodbye
document.getElementById('content').innerHTML = "Goodbye.";


//to see change add button with event listener
button.addEventListener('click', () => {
    if (content.innerHTML == "Goodbye."){
        content.innerHTML = "Hello";
    } else{
        content.innerHTML="Goodbye."
    }
});

//how to remove elements all together
//use child to find parent
document.getElementById('remove').addEventListener('click', () => {
    // set id to remove
    let idToRemove = document.getElementById('remove-id').value;
    //find element
    let elementToRemove = document.getElementById(idToRemove);
    // remove child from parent
    elementToRemove.parentNode.removeChild(elementToRemove);
    //set value back to blank
    document.getElementById('remove-id').value = '';
    //remove child from parent
    //content.parentNode.removeChild(content);

});



//increment id and add to new element below
let id=0;

//add elements to DOM
document.getElementById('add').addEventListener('click', () => {
    //find parent
    var parent= document.getElementById('paragraphs');
    //create new element and string is element type that it is creating
    var newElement= document.createElement('p');
    //take new element and add attributes
    newElement.innerHTML = /*"This is a new paragraph."; change for input*/ document.getElementById('new-text').value;
    // set attribute for new element with specific id

    newElement.setAttribute('id', id++);
    
    //append to parent
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';
});


//control what new paragraphs say add input
//instead of "this is a new paragraph" grab element

//delete after inputing
//add to after append child above
//now remove specific paragraphs with id: add input to tell which one to delete
//add to above code in remove
