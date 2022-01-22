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

//add-notes btn

const add_btn = document.getElementById("add-notes-btn");
add_btn.onclick = () => {
    let add_tax = document.getElementById("add-notes");
    let add_tax_pop = document.getElementById("add-tax-pop");
    add_tax.style.display = "grid";
    add_tax_pop.style.animation = "popon 0.5s";
    add_tax_pop.style.animationFillMode = "forwards";
    document.onclick = function(e){
        if(e.target.id == 'add-notes'){
            add_tax_pop.style.animation = "popout 0.5s";
            add_tax_pop.style.animationFillMode = "forwards";
            setTimeout(function(){
                add_tax.style.display = 'none';
            },400);     
        }
    }
    let save = document.getElementById("save");
    let note = document.getElementById("note");
    let note_msg = document.getElementById("note-msg");
    let hashtag = document.getElementById("hashtag");
    save.onclick = () => {
        if(note.value =="" || hashtag.value == "" || note_msg.value == ""){
            alert("Some Fields Are Empty");
        }
        else{
            let date = new Date();
            const month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            let current_date = date.getDate();
            let current_month = month[date.getMonth()];
            let current_year = date.getFullYear();
            let save_date = `${current_date} ${current_month} ${current_year}`;
            let data = {title:note.value, msg:note_msg.value, hashtag:hashtag.value, date:save_date}
            let details = JSON.stringify(data);
            localStorage.setItem(`Notes_${note.value}`,details);
            add_tax_pop.style.animation = "popout 0.5s";
            add_tax_pop.style.animationFillMode = "forwards";
            setTimeout(function(){
                add_tax.style.display = 'none';
            },400);
            let notes = document.getElementById("notes");
            notes.innerHTML = "";
            notes_update();
        }
    }
}



//notes update

function notes_update(){
    
    let i;
    let notes = document.getElementById("notes");
    for(i=0;i<localStorage.length;i++){
        all_keys = localStorage.key(i);
        if(all_keys.indexOf("Notes_") != -1){
            let details = localStorage.getItem(all_keys);
            let data = JSON.parse(details);
            let div = document.createElement("DIV");
            let h3 = document.createElement("H3");
            let p1 = document.createElement("P");
            p1.innerHTML = data.title;
            p1.className = "title";
            let img1 = document.createElement("IMG");
            img1.src = "images/delete3.svg";
            let p3 = document.createElement("P");
            p3.innerHTML = data.date;
            p3.id = "date";
            let p4 = document.createElement("P");
            p4.innerHTML = data.msg;
            p4.id = "notes-sum";
            let h4 = document.createElement("H4");
            h4.innerHTML = `#${data.hashtag}`;
            let img2 = document.createElement("IMG");
            img2.src = "images/dwnld.svg";
            img2.id ="dwnld-btn";
            let img3 = document.createElement("IMG");
            img3.src = "images/edit2.svg";
            img3.className = "edit-btn";
            notes.appendChild(div);
            div.appendChild(h3);
            h3.appendChild(p1);
            h3.appendChild(img1);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(h4);
            div.appendChild(img2);
            div.appendChild(img3);
            img3.onclick = () => {
                add_btn.click();
                let note = document.getElementById("note");
                let note_msg = document.getElementById("note-msg");
                let hashtag = document.getElementById("hashtag");
                note.value = p1.innerHTML;
                note_msg.value = p4.innerHTML;
                hashtag.value = h4.innerHTML.replace("#","");
            }
            img1.onclick = () => {
                let confirm1 = confirm("Confirm Your Delete");
                if(confirm1 == true){
                    localStorage.removeItem(`Notes_${p1.innerHTML}`);
                    let notes = document.getElementById("notes");
                    notes.innerHTML = "";
                    notes_update();
                }
            }
            img2.onclick = () => {
                let file = new Blob([p4.innerHTML],{type:'text/plain'});
                let a = document.createElement("A");
                a.href = URL.createObjectURL(file);
                a.download = p1.innerHTML;
                a.click();
            }
        }
    }
    
}

notes_update();

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

