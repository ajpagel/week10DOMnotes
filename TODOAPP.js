//each todo will have id

let id = 0;

//when we click add we want to create new row and add to table

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); //current time and current date
    let table = document.getElementById('list'); //reference table
    let row = table.insertRow(1); //always enter into second postion or position 1
    //set attributes for row
    row.setAttribute('id', `item-${id}`); //set id
    row.insertCell(0).innerHTML = document.getElementById('new-task').value; //grab value inside of the new task
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}- ${createdDate.getDate()}`; //year, month, date 
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;  //add start date 
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;  //add end date 
    //create button for actions
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));//create delete button with id and increment
    //set new task to start over for good user experience
    document.getElementById('new-task').value = '';

});


//create function for delete button

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    //do not need to use event listener; when clicked it will delete row
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`); //this will delete test id
        elementToDelete.parentNode.removeChild(elementToDelete); //remove child from parent
    };
    return btn;
}