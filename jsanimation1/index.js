var startbtn=document.querySelector(".startbtn");
    //var stopbtn=document.querySelector(".stopbtn");
    var one=document.querySelector(".one");
    var two=document.querySelector(".two");
    var three=document.querySelector(".three");
    var four=document.querySelector(".four");
    var dots=document.querySelector("#dots");

    //startbtn.onclick=function(){
    one.classList.add("oneanimate");
    two.classList.add("twoanimate");
    three.classList.add("threeanimate");
    four.classList.add("fouranimate");
    /* }
    stopbtn.onclick=function(){
    one.classList.remove("oneanimate");
    two.classList.remove("twoanimate");
    three.classList.remove("threeanimate");
    four.classList.remove("fouranimate");
    }
    */
    function dotsfunction(){
        setInterval(function (){
            dots.textContent=dots.textContent+".";
        },600);
        setInterval(function stop(){
            dots.textContent=".";
        },3000);
    }
    dotsfunction();
