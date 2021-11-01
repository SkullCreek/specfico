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
            localStorage.setItem("image_url",image);
            var hide_uploadbox = document.getElementById("welcome");
            hide_uploadbox.style.display = "none";
        }

    }
}

function profile_name(){
    var result = document.getElementById("result");
    var user_mail = sessionStorage.getItem('user_mail');
    var user_details = localStorage.getItem(user_mail);
    var user_data=JSON.parse(user_details);
    result.innerHTML = user_data.name;
}
profile_name();