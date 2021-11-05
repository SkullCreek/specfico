
//add contact coding

function add_contacts(){
    var fullname2 = document.getElementById("fullname").value;
    var pnum = document.getElementById("pnum").value;
    var snum = document.getElementById("snum").value;
    if(fullname2 != "" && pnum != "" && snum != ""){
        if(isNaN(pnum)){
            alert("please enter a valid primary number");
        }
        else{
            if(isNaN(snum))
            {
                alert("please enter a valid secondary number");
            }
            else{
                var user = {fullname:fullname2,pnum:pnum,snum:snum}
                var user_details = JSON.stringify(user);
                localStorage.setItem(fullname2+"contact",user_details);
            }
        }
    }
    else{
        alert("Some fields are empty");
    }
}

//add contact coding


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
