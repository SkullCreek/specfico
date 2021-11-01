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


//stop showing upload

function stop_upload(){
    if(localStorage.getItem(sessionStorage.getItem('user_mail')+"image_url") !=null)
    {
        var hide_uploadbox = document.getElementById("welcome");
        hide_uploadbox.style.display="none";
    }
}

stop_upload();

