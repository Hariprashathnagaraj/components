function fn(){
    var valid=true;
     
    var name=document.getElementById("valid01").value;
    var mobile=document.getElementById("valid02").value;
    var email=document.getElementById("valid03").value;
    var password=document.getElementById("valid04").value;
    var cpassword=document.getElementById("valid05").value;



    //name
if(name==''){
        valid=false;
    var com=document.getElementById("name")
    com.innerHTML="* Please enter your name"
}
else  if(name.length<5){
    valid=false;
    var com=document.getElementById("name")
    com.innerHTML="* Name must contain atleast 6 character"
}

else{
    document.getElementById("name").innerHTML=''; 
}


    //mobile


if(mobile==''){
    valid=false;
var com=document.getElementById('mobile')
com.innerHTML="* Please enter your mobile number"
}
else  if(mobile.length<10 || mobile.length>10){
valid=false;
var com=document.getElementById('mobile')
com.innerHTML="* Please enter 10 digit number"
}

else{
document.getElementById('mobile').innerHTML='';
}


    //email

if(email==''){
    valid=false;
var com=document.getElementById('mail')
com.innerHTML="* Please enter your vali e-mail"
}
else{
document.getElementById('mail').innerHTML='';
}



//password

if(password==''){
    valid=false;
var com=document.getElementById('pass1')
com.innerHTML="* Please enter your password here"
}
else  if(password.length<6){
valid=false;  
var com=document.getElementById('pass1')
com.innerHTML="* password should be 6 character long"
}

else{
document.getElementById('pass1').innerHTML='';
}


//cpassword
     
if(cpassword==''){
    valid=false;
var com=document.getElementById('pass2')
com.innerHTML="* Re-type your password here"
}
else{
document.getElementById('pass2').innerHTML='';
}

if(cpassword!="" && password!="")
    
if(password!=cpassword){
    valid=false;
var com=document.getElementById('pass2')
com.innerHTML="* Passwordd does not match"

    
}


if(password==cpassword){
   
var com=document.getElementById('pass2').innerHTML="";
    
}


if(!document.getElementById("valid06").checked){
    valid=false;
    var com=document.getElementById('check')
    com.innerHTML="* please check the terms and condition"

}
else{
    document.getElementById("check").innerHTML="";
}


    return valid;
}