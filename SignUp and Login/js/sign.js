//signup login animation

var signup_btn2 = document.getElementById("sign-up-btn2");
signup_btn2.onclick = function(){
    var slider = document.getElementById("bg-img");
    slider.style.animation = "slide 2s";
    slider.style.animationFillMode = "forwards";
    return false;
}
var login_btn = document.getElementById("login-btn");
login_btn.onclick = function(){
    var slider = document.getElementById("bg-img");
    slider.style.animation = "slide2 2s";
    slider.style.animationFillMode = "forwards";
    return false;
}


function myFunction(x) {
    if (x.matches) {
        var signup_btn = document.getElementById("sign-up-btn");
        signup_btn.onclick = function(){
            var slider = document.getElementById("bg-img");
            slider.style.animation = "mobile 2s";
            slider.style.animationFillMode = "forwards";
            return false;
        }

        var signup_btn2 = document.getElementById("sign-up-btn2");
            signup_btn2.onclick = function(){
            var slider = document.getElementById("bg-img");
            slider.style.animation = "mobile 2s";
            slider.style.animationFillMode = "forwards";
            return false;
            }
        
        var login_btn = document.getElementById("login-btn");
        login_btn.onclick = function(){
        var slider = document.getElementById("bg-img");
        slider.style.animation = "mobile2 2s";
        slider.style.animationFillMode = "forwards";
        return false;
        }
    } 
}
  
  var x = window.matchMedia("(max-width: 650px)");
  myFunction(x);

function login_check(){
    var login = sessionStorage.getItem("sign");
    if(login== "Login"){
        var slider = document.getElementById("bg-img");
        slider.style.right="50%";
        function myFunction(x){
            if (x.matches) {
                var slider = document.getElementById("bg-img");
                slider.style.transform = "translateY(0px)";
                
            }
        }
        var x = window.matchMedia("(max-width: 650px)");
        myFunction(x);
        sessionStorage.removeItem("sign");
    }

}

login_check();
//signup login animation

//signup validation

function signup(){
    var name = btoa(document.getElementById("signup-name").value);
    var email = btoa(document.getElementById("signup-email").value);
    var password = btoa(document.getElementById("signup-password").value);
    if(name!="" && email!="" && password!="")
    {
        var user_input = {name:name,email:email,password:password};
        var user_data = JSON.stringify(user_input);
        localStorage.setItem(email,user_data);
        document.getElementById("signup-success").innerHTML="     success";
        document.getElementById("signup-name").value="";
        document.getElementById("signup-email").value="";
        document.getElementById("signup-password").value="";
        setTimeout(function(){document.getElementById("signup-success").innerHTML=""},2000);
        var slider = document.getElementById("bg-img");
        slider.style.animation = "slide 2s";
        slider.style.animationFillMode = "forwards";
        return false;
    }
}

function signup_check(){
    var pwd = document.getElementById("signup-password");
    var email = btoa(document.getElementById("signup-email").value);
    var eml = document.getElementById("signup-email");
    var sub = document.getElementById("sign-up-btn");
    var warning = document.getElementById("warning");
    if(localStorage.getItem(email)!=null){
        warning.innerHTML="User already exists";
        pwd.disabled=true;
        sub.disabled=true;
        eml.onclick = function(){
            this.value="";
            warning.innerHTML="";
            pwd.disabled=false;
            sub.disabled=false;
        }
    }
}

//signup validation


//login validation

function login(){
    var username = btoa(document.getElementById("login-email").value);
    var password = btoa(document.getElementById("login-password").value);
    var login_input = {username:username,password:password};
    var login_data = JSON.stringify(login_input);
    sessionStorage.setItem(username,login_data);
    var session_data = sessionStorage.getItem(username);
    var user_detail = JSON.parse(session_data);
    if(localStorage.getItem(user_detail.username) == null){
        alert("user not found");
    }
    else{
        if(localStorage.getItem(user_detail.username).match(user_detail.password)){
            location.replace("../../profile/profile.html");
            sessionStorage.setItem('user_mail',username);
            return false;
        }
        else{
            alert("user not found");
        }
    }
}

//login validation