//member class
class Member {
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
}

//team class

class Team {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.members = [];
    }
//add member
    addMember(member){
        this.members.push(member);
    }
//delete member
    deleteMember(member){
        let index = this.members.indexOf(member);
        this.members.splice(index, 1); //remove one element or the one that is passed in
    }
}


//every team that is made is stored here
let teams = [];
let teamId = 0; //each team gets new incremented id


onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
    drawDOM(); //iterate over teams array and build tables for each one

})
//create function that makes it easier 

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
} 
 
function getValue(id){
    return document.getElementById(id).value;
}

function drawDOM(){ //clear out teamDiv, iterate over the teams, create table for each team, create a delete button, add all members to team
    let teamDiv = document.getElementById('teams'); //div with id of teams
    clearElement(teamDiv);
    for(team of teams){ //iterate over teams
        let table = createTeamTable(team); //takes instance of team class and builds tables
        let title = document.createElement('h2');
        title.innerHTML = team.name; //build title based on data in instance of team class
        title.appendChild(createDeleteTeamButton(team)); //delete button
        teamDiv.appendChild(title); //title
        teamDiv.appendChild(table); //table
        //add each memeber to table
        for (member of team.members){
            createMemberRow(team, table, member); //access to 
        }
    }
}

function createMemberRow(team, table, member) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        let index = team.members.indexOf(member); //find index of the member
        team.members.splice(index, 1); 
        drawDOM(); 
    };

    return btn;
}

function createDeleteTeamButton(team){ //delete team from teams array
    let btn = document.createElement('button');
    btn.className = "btn btn-primary";
    btn.innerHTML = "Delete Team";
    btn.onclick = () => {
        let index = team.indexOf(team);
        team.splice(index, 1);
        drawDOM();
    };
    return btn;
}


function createNewMemberButton(team){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onClick = () => { //what do we want to happen 
        //instance of member class
        team.members.push(new Member(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}`)));
    };
    return btn;
}



function createTeamTable(team){ //list all elements that need to be created
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-dark table-striped');
    let row = table.insertRow(0);
    let nameColumn = document.createElement('th');
    let positionColumn = document.createElement('th');
    nameColumn.innerHTML = "Name";
    positionColumn.innerHTML = 'Position';
    row.appendChild(nameColumn);
    row.appendChild(positionColumn);
    let formRow = table.insertRow(1); //form where we can insert new team members
    let nameTh = document.createElement('th');
    let positionTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', `name-input-${team.id}`);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    //position input
    let positionInput = document.createElement('input');
    positionInput.setAttribute('id', `position-input-${team.id}`);
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('class', 'form-control');
    let newMemberButton = createNewMemberButton(team); //use data from team to associate button with this team
    nameTh.appendChild(nameInput);
    positionTh.appendChild(positionInput);
    createTh.appendChild(newMemberButton);
    formRow.appendChild(nameTh);
    //append cells to row
    formRow.appendChild(positionTh);
    formRow.appendChild(createTh);
    return table;

}



function clearElement(element){ //remove every first child while there is a first child. clear element
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}




