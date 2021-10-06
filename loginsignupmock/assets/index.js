//login page validation
var loginemail=document.getElementById("loginemail");
var loginpass=document.getElementById("loginpass");
var loginbtn=document.getElementById("loginbtn");
var loginerrormsg=document.getElementById("loginerrormsg");

//like we want to validate only gmail accounts
loginbtn.addEventListener("click",function(){
if(loginemail.value==""){
    loginerrormsg.innerHTML+="<br />Please enter a email";
}
if(loginpass.value==""){
    loginerrormsg.innerHTML+="<br />Please enter a Password"
}

});
//signup page validation
