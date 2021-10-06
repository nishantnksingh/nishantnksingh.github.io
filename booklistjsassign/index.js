var titleinput=document.getElementById("titleinput");
var authorinput=document.getElementById("authorinput");
var priceinput=document.getElementById("priceinput");
var addbtn=document.getElementById("addbookbtn");
var storediv=document.getElementById("storediv");

var x=0;
addbtn.addEventListener("click",function addbookfunc(){
    x++;
var tobeappendnode="<div id='deletebtn"+x+"'><button onclick='deletefunc("+x+")'>X</button>  <button id='Edit' onclick='edit()'>Edit</button> Title: "+titleinput.value+"<br/>Author: "+authorinput.value+"<br/>Price: "+priceinput.value+"</div>";
    storediv.innerHTML=storediv.innerHTML+tobeappendnode;
})

var deletethediv=document.getElementById("delete");
function deletefunc(btnpassed){
    var somevar="deletebtn"+btnpassed;
    var divnode=document.getElementById(somevar);
    divnode.remove();
}

