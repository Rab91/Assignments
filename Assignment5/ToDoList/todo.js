var todoList = [];

var element = document.getElementById('btn');
element.addEventListener('click',displayList);

function displayList(){

    var listTitle = document.getElementById("myTitle").value;
    myTitle.value='';

    var title = document.createTextNode(listTitle);

    var listDescription = document.getElementById("myDescription").value;
    myDescription.value= '';
    var description = document.createTextNode(listDescription); 

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";

    var listItem = document.createElement("li");
    listItem.appendChild(checkbox);
    listItem.appendChild(title);
    listItem.appendChild(description);
    var myList = document.getElementById("list").appendChild(listItem);
    myList.style.color = "#7B0099";    

    todoList.push({
       Title: listTitle, 
       Description: listDescription
    }
    );

    console.log(todoList);


}
