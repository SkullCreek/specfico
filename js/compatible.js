/*Warning for browser compatibility*/

function check_browser(){
    if(navigator.userAgent.indexOf("MSIE")!=-1){
        var webpage = document.getElementById("webpage");
        webpage.style.display = "none";
        document.body.style.innerHTML="<h1>Please open the page in chrome browser</h1>"
        document.body.style.fontSize="50px";
    }
}

check_browser();

/*warning for browser compatibility*/

/*checking cookies*/

function checkCookieEnabled(){
    if(navigator.cookieEnabled == false){
        var webpage = document.getElementById("webpage");
        webpage.style.display = "none";
        document.body.style.innerHTML="<h1>Please enable cookies in your browser</h1>"
        document.body.style.fontSize="50px";
    }
}
checkCookieEnabled();

/*checking cookies*/