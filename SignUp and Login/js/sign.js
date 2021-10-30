//signup login animation

var signup_btn = document.getElementById("sign-up-btn");
signup_btn.onclick = function(){
    var slider = document.getElementById("bg-img");
    slider.style.animation = "slide 2s";
    slider.style.animationFillMode = "forwards";
    return false;
}
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