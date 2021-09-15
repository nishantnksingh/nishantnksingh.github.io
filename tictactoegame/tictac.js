var p1name=document.querySelector(".p1name");
var p2name=document.querySelector(".p2name");
var sq = document.querySelectorAll(".sq");
var result=document.querySelector(".center");
var reset=document.querySelector(".reset");
var count=1;
var value;


for(var i=0;i<9;i++){
    sq[i].addEventListener("click",function(){
        if((count%2)=="0")
            {this.textContent="0";
            count++;
            }
        else{this.textContent="X"
             count++;} 
      check();  
      
    })
}

reset.addEventListener("click",function(){
    for(var i=0;i<9;i++){
    sq[i].textContent="";
    result.textContent="LET'S TIME PASS";
    p1name.value="";
    p2name.value="";
    }
})


function comx(nm1,nm2,nm3){
    var num1=sq[nm1].textContent;
    var num2=sq[nm2].textContent;
    var num3=sq[nm3].textContent;
    var num11=num1=="X";
    var num22=num2=="X";
    var num33=num3=="X";
    var resultt=(num11 && num22 && num33);
    return resultt;
}
function com(nm1,nm2,nm3){
    var num1=sq[nm1].textContent;
    var num2=sq[nm2].textContent;
    var num3=sq[nm3].textContent;
    var num11=num1=="0";
    var num22=num2=="0";
    var num33=num3=="0";
    var resultt=(num11 && num22 && num33);
    return resultt;
}

function check(){
     if(comx(0,1,2)||comx(3,4,5)||comx(6,7,8)||comx(0,3,6)||comx(1,4,7)||comx(2,5,8)||comx(0,4,8)||comx(2,4,6))
            {result.textContent="Player One Won";}
        if(com(0,1,2)||com(3,4,5)||com(6,7,8)||com(0,3,6)||com(1,4,7)||com(2,5,8)||com(0,4,8)||com(2,4,6))
            {result.textContent="Player Two Won";
           }
}