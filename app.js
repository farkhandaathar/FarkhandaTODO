                  // ToDo App

var list = document.getElementById("list");


function addtodo(){
    //add item
    var enter =document.getElementById("item")
    //create li with Textnode
    var li = document.createElement('li')
    var liText = document.createTextNode(enter.value)
    li.appendChild(liText)


    //create delete button
var delBtn = document.createElement("button")
var delText=document.createTextNode("Delete")
delBtn.setAttribute("class", "Btn")
delBtn.setAttribute("onclick", "deleteItem(this)")
delBtn.appendChild(delText)

//create edit button
var editBtn =document.createElement("button")
var editText=document.createTextNode("Edit")
editBtn.setAttribute("class", "edit")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick", "editItem(this)")

li.appendChild(delBtn)
li.appendChild(editBtn)

list.appendChild(li);
enter.value=""
console.log(li)
   
}

function deleteItem(e){
e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("enter edit value", val)
    e.parentNode.firstChild.nodeValue=editValue;
}

//to delete all
function deleteAll(){
    list.innerHTML=""
}