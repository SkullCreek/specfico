
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

//controls
var video = document.getElementById('video');
var bar1 = document.getElementById('play-bar');
var play = document.getElementById('play-pause');

play.onclick=function(){
    if(video.paused){
        play.className = 'pause';
        play.title= "pause";
        video.play();
    }
    else{
        play.className = 'play';
        play.title = 'play';
        video.pause();
    }
}

video.addEventListener('timeupdate',function(){
    var barPos = video.currentTime /video.duration;
    bar1.style.width = barPos*100 + "%";
    if(video.ended){
        BigInt.className = "play";
    }
    var time = document.getElementById("time");
    console.log(video.currentTime);
    time.innerText = (parseInt((video.currentTime/60)) + ((video.currentTime%60)/100)).toFixed(2) +"/"+ (parseInt((video.duration/60)) + ((video.duration%60)/100)).toFixed(2);
});

var fullscreen = document.getElementById("full-screen");
fullscreen.onclick = function(){
    video.webkitRequestFullscreen();
}


var speaker = document.getElementById("volume-up");
speaker.onclick = function(){
    var volume_slider = document.getElementById("volume-slider");
    if(volume_slider.style.display=="none")
    {
        volume_slider.style.display="inline-block";
        volume_slider.oninput = function(){
            video.volume = this.value; 
            if(this.value <= 0){
                speaker.className = "mute";
                speaker.title = this.value*100 + "%";
            }
            else{
                speaker.className = "none";
                speaker.title = this.value*100 + "%";
            }
        }
    }
    else{
        volume_slider.style.display="none";
    }
}

//forward and backward progress

var progress_bar = document.getElementById("play-track");
progress_bar.onclick = function(event){
    var percent = event.offsetX/this.offsetWidth;
    video.currentTime = percent*video.duration;
}


//download video coding

var download = document.getElementById("download");
download.onclick = function(){
    var video_src = document.getElementById("video_src").src;
    var a_tag = document.createElement("A");
    a_tag.href = video_src;
    a_tag.download = video_src;
    document.body.appendChild(a_tag);
    a_tag.click();
}
//controls