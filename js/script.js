function getStarted(){
    location.href = "../SignUp and Login/Signlogin.html"
}

document.getElementById("sign-btns").onclick=function()
{
    var btn = document.getElementById("sign-btns");
    sessionStorage.setItem("sign", btn.innerHTML);
}