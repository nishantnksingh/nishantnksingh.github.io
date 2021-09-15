var h1=document.querySelector("h1");
var toprgb=document.querySelector(".selectrgb");
var btn=document.querySelectorAll(".btn");
var changeagain = document.querySelectorAll("button")[0];
var result=document.querySelector(".result");
var easybtn=document.querySelectorAll("button")[1];
var medbtn=document.querySelectorAll("button")[2];
var hardbtn=document.querySelectorAll("button")[3];
var sq=document.querySelectorAll(".sq");
var ranColors;
var ranColorChoosen;
var numcolorgen;
var selected;

function start(){
    numcolorgen=9;
    completebtn(numcolorgen); 
    changeclass(hardbtn);
}
start();

easybtn.addEventListener("click",ease);
medbtn.addEventListener("click",med);
hardbtn.addEventListener("click",start);

var count=0;
for(var s=0;s<9;s++){
  sq[s].addEventListener("click",function(){
    count++;
     if(this.style.backgroundColor!=selected){this.style.backgroundColor="#232323"; result.textContent="Try Again..!";}
      else
          {result.textContent="Correct";
           h1.style.backgroundColor=selected;
           changeagain.textContent="Play Again";
           for(var q=0;q<9;q++){
               sq[q].style.backgroundColor=selected;}}            
});  
}

changeagain.addEventListener("click",function(){
    if(this.textContent=="Change Colors")
    {
        switch(numcolorgen){case 9: start();break; case 6: med();break; case 3: ease();}
    }
    else{
        this.textContent="CHANGE COLORS";
        switch(numcolorgen){case 9: start();break; case 6: med();break; case 3: ease();}
        result.textContent="        ";
    }
})

function disableExtra(num){
    for(var i=num;i<9;i++)
{
    sq[i].style.display="none";
}
    for(var j=0;j<num;j++)
 { 
     sq[j].style.display="block";
 }}

function generateColors(numany){
    for(var i=0;i<numany;i++){
     var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
        ranColors[i]=("rgb("+r+", "+g+", "+b+")");
    }}

function fillColors(numany,random){
    for(var i=0;i<numany;i++)
        {  var color=random[i];
            sq[i].style.backgroundColor=color;
        }
}

function selectanyone(numany,random){
    selected=random[Math.floor(Math.random()*numany)];
    toprgb.textContent=selected;
}

function completebtn(numany){
  ranColors=[]; 
disableExtra(numcolorgen);
generateColors(numcolorgen);
fillColors(numcolorgen,ranColors);
selectanyone(numcolorgen,ranColors);
h1.style.backgroundColor="steelblue";
result.textContent="        ";
changeagain.textContent="CHANGE COLORS"
}

function changeclass(btnn){
    for(var b=0;b<4;b++){
      btn[b].classList.remove("sbtn");  
    } 
btnn.classList.add("sbtn");    
}

function ease(){
    numcolorgen=3;
   completebtn(numcolorgen); 
    changeclass(easybtn);
}

function med(){
    numcolorgen=6;
    completebtn(numcolorgen); 
    changeclass(medbtn);
}

