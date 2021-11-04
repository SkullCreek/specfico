//url copy paste security

function url_secure()
{
    if(sessionStorage.length<=0)
    {
        var page = document.getElementById("profile-page");
        page.style.display="none";
        document.body.style.backgroundColor="black";
        document.body.innerHTML = "<h1 style='color:white;font-size:100px;font-family:sans-serif;'>Illegal action performed</h1>";

    }
}
url_secure();
//url copy paste security

//upload pic
function upload_pic(){
    var input = document.getElementById("profile-img");
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    var image;
    freader.onloadend =function(event){
        image=event.target.result;
        var show = document.getElementById("upload");
        show.style.background="url("+event.target.result+")";
        show.style.backgroundColor="none";
        show.style.backgroundRepeat="no-repeat";
        show.style.backgroundSize="contain";
        var text = document.getElementById("text");
        text.innerHTML="";
        var ficon = document.getElementById("next-btn");
        ficon.onclick = function(){
            localStorage.setItem(sessionStorage.getItem('user_mail')+"image_url",image);
            var hide_uploadbox = document.getElementById("welcome");
            hide_uploadbox.style.display = "none";
            window.location=location.href;
        }

    }
}

function profile_name(){
    var result = document.getElementById("wlc-result");
    var user_mail = sessionStorage.getItem('user_mail');
    var user_details = localStorage.getItem(user_mail);
    var user_data=JSON.parse(user_details);
    var fullname = user_data.name;
    result.innerHTML = atob(fullname);
}
profile_name();
//upload pic

//stop showing upload

function stop_upload(){
    if(localStorage.getItem(sessionStorage.getItem('user_mail')+"image_url") !=null)
    {
        var hide_uploadbox = document.getElementById("welcome");
        hide_uploadbox.style.display="none";
    }
}

stop_upload();

//stop showing upload



//menubar coding

function myFunction(x) {
    if (x.matches) { // If media query matches
      var menu = document.getElementById("menu-bar");
        menu.onclick=function()
        {
            var menu_option=document.getElementById("left");
            menu_option.style.animation="darpan_slide 1s";
            menu_option.style.animationFillMode="forwards";
            var menu_exit = document.getElementById("close");
            menu_exit.onclick=function(){
            var menu_option=document.getElementById("left");
            menu_option.style.animation="darpan_slide_exit 0.5s";
            menu_option.style.animationFillMode="forwards";
        }

        }
        
    }
  }
  
  var x = window.matchMedia("(max-width: 751px)");
  myFunction(x) ;
  
//menubar coding

//profile photo 

function showing_pic_name(){
    var name  = document.getElementById("user-name");
    var user_mail = sessionStorage.getItem("user_mail");
    var emailid = document.getElementById("email-id");
    var user_details = localStorage.getItem(user_mail);
    var user_data= JSON.parse(user_details);
    var fullname = user_data.name;
    name.innerHTML=atob(fullname);
    emailid.innerHTML=atob(user_mail);

    var pic_box = document.getElementById("profile-img-section");
    var image_name = localStorage.getItem(user_mail+"image_url");
    pic_box.style.background="url("+image_name+")";
    pic_box.style.backgroundRepeat="no-repeat";
    pic_box.style.backgroundSize="contain";
}

showing_pic_name();
//profile photo

//logout coding

function logout(){
    sessionStorage.clear();
    setTimeout(function(){
        window.location="../../index.html";
    },1000);
}
//logout coding