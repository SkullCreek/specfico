window.onload = function(){
    var x = document.getElementById("contact").children.length;
    if(x==0)
    {
        document.getElementById("contact").innerHTML= "0 number of contact"
    }
}



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




function show_contacts(){
    var i;
    for(i=1;i<=localStorage.length;i++){
        var keys = localStorage.key(i);
        if(keys.match("contact")){
            var json_text = localStorage.getItem(keys);
            var json_extract = JSON.parse(json_text);
            var con = document.getElementById("contact");
            var tr = document.createElement("TR");
            var td_1 = document.createElement("TD");
            var td_2 = document.createElement("TD");
            var td_3 = document.createElement("TD");
            var td_4 = document.createElement("TD");
            var td_5 = document.createElement("TD");
            var td_6 = document.createElement("TD");
            var a_1 = document.createElement("A");
            var a_2 = document.createElement("A");
            var a_3 = document.createElement("A");
            var img_1 = document.createElement("IMG");
            var img_2 = document.createElement("IMG");
            var img_3 = document.createElement("IMG");
            var span = document.createElement("SPAN");
            span.setAttribute("class", "material-icons");
            span.setAttribute("style","transform: translate(-10px,5px);");
            a_1.setAttribute("href","#");
            a_2.setAttribute("href","#");
            a_3.setAttribute("href","#");
            con.appendChild(tr);
            tr.appendChild(td_1);
            td_1.appendChild(span);
            tr.appendChild(td_2);
            tr.appendChild(td_3);
            tr.appendChild(td_4);
            td_4.appendChild(a_1);
            a_1.appendChild(img_1);
            tr.appendChild(td_5);
            td_5.appendChild(a_2);
            a_2.appendChild(img_2);
            a_2.setAttribute("id", "delete");
            tr.appendChild(td_6);
            td_6.appendChild(a_3);
            a_3.appendChild(img_3);
            span.appendChild(document.createTextNode("person"));
            td_1.appendChild(document.createTextNode(json_extract.fullname));
            td_2.appendChild(document.createTextNode(json_extract.pnum));
            td_3.appendChild(document.createTextNode(json_extract.snum));
            img_1.setAttribute("src","images/edit.svg");
            img_2.setAttribute("src","images/delete.svg");
            img_3.setAttribute("src","images/save.svg");  
            del_contact(keys, a_2);       
        }
    }
}
show_contacts();

function del_contact(contact_name, del_btn){
    del_btn.onclick = function(){
        var answer = confirm("Confirm Your Delete");
        if(answer==true){
            var td = this.parentElement;
            var tr = td.parentElement;
            tr.remove();
            localStorage.removeItem(contact_name);
            var x = document.getElementById("contact").children.length;
                if(x==0)
                {
                    document.getElementById("contact").innerHTML= "0 number of contact"
                }
        }
    }
}

//add contact coding


function search_contact(user_input){
    var keyword = user_input.value;
    var contact_list = document.getElementById("contact");
    var td = contact_list.getElementsByTagName("TD");
    
    var i;
    for (i=0;i<td.length;i++)
    {
        if(td[i].innerHTML.indexOf(keyword) != -1){
            td[i].parentElement.style.display="table";
        }
        else{
            td[i].parentElement.style.display="none";
        }
    }
}