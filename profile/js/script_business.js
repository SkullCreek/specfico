// cjheck company
window.onload=function check_cmp(){
    if(localStorage.getItem("company") != null)
    {
        document.getElementById("new-business").style.display="none";
    }
}




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

//starting new company form

var next_btn = document.getElementById("next");
next_btn.onclick = function(){
    var company_name = document.getElementById("company-name").value;
    var mailing_name = document.getElementById("mailing-name").value;
    if(company_name != "" && mailing_name != ""){
        var company_form = document.getElementById("company-form");
        company_form.style.animation = "popout 0.8s";
        company_form.style.animationFillMode = "forwards";
        setTimeout(function(){
            company_form.style.display = "none";
            var address_form = document.getElementById("address-form");
            address_form.style.animation = "slide-up 0.5s";
            address_form.style.animationFillMode = "forwards";
            
        },600);
        setTimeout(function(){
            var address = document.getElementById("address");
            var company = document.getElementById("company");
            address.style.backgroundColor = "#323232";
            address.style.color = "white";
            address.style.transition = "all 0.6s";
            company.style.backgroundColor = "#F5F5F5";
            company.style.color = "black";
            company.style.transition = "all 0.4s";
        },500);
    }
    else{
         if(company_name == ""){
            document.getElementById("company-name").style.borderBottom = "2px solid red";
            document.getElementById("company-name").onclick = function(){
                document.getElementById("company-name").style.borderBottom = "2px solid black";
            }
        }
        if(mailing_name == ""){
            document.getElementById("mailing-name").style.borderBottom = "2px solid red";
            document.getElementById("mailing-name").onclick = function(){
                document.getElementById("mailing-name").style.borderBottom = "2px solid black"
            }
        }
    }
}

var back_btn = document.getElementById("back");
back_btn.onclick = function(){
    var address_form = document.getElementById("address-form");
    address_form.style.animation = "slide-down 0.5s";
    address_form.style.animationFillMode = "forwards";
    setTimeout(function(){
        var company_form = document.getElementById("company-form");
        company_form.style.animation = "popon 0.8s";
        company_form.style.animationFillMode = "forwards";
        company_form.style.display = "block";
    },500);
    setTimeout(function(){
        var address = document.getElementById("address");
        var company = document.getElementById("company");
        address.style.backgroundColor = "#F5F5F5";
        address.style.color = "black";
        address.style.transition = "all 0.4s";
        company.style.backgroundColor = "#323232";
        company.style.color = "white";
        company.style.transition = "all 0.6s";
    },500);
}

var next_btn2 = document.getElementById("next2");
next_btn2.onclick = function(){
    var company_address = document.getElementById("company-address").value;
    var company_number = document.getElementById("company-number").value;
    if(company_address != "" && company_number != ""){
        var address_form = document.getElementById("address-form");
        address_form.style.animation = "popout2 0.8s";
        address_form.style.animationFillMode = "forwards";
        setTimeout(function(){
            address_form.style.display = "none";
            var details_form = document.getElementById("details-form");
            details_form.style.animation = "slide-up 0.5s";
            details_form.style.animationFillMode = "forwards"; 
        },600);
        setTimeout(function(){
            var address = document.getElementById("address");
            var details = document.getElementById("details");
            details.style.backgroundColor = "#323232";
            details.style.color = "white";
            details.style.transition = "all 0.6s";
            address.style.backgroundColor = "#F5F5F5";
            address.style.color = "black";
            address.style.transition = "all 0.4s";
        },500);
    }
    else{
         if(company_address == ""){
            document.getElementById("company-address").style.borderBottom = "2px solid red";
            document.getElementById("company-address").onclick = function(){
                document.getElementById("company-address").style.borderBottom = "2px solid black";
            }
        }
        if(company_number == ""){
            document.getElementById("company-number").style.borderBottom = "2px solid red";
            document.getElementById("company-number").onclick = function(){
                document.getElementById("company-number").style.borderBottom = "2px solid black"
            }
        }
    }
}

var back_btn2 = document.getElementById("back2");
back_btn2.onclick = function(){
    var details_form = document.getElementById("details-form");
    details_form.style.animation = "slide-down 0.5s";
    details_form.style.animationFillMode = "forwards";
    setTimeout(function(){
        var address_form = document.getElementById("address-form");
        address_form.style.animation = "popon2 0.8s";
        address_form.style.animationFillMode = "forwards";
        address_form.style.display = "block";
    },500);
    setTimeout(function(){
        var address = document.getElementById("address");
        var details = document.getElementById("details");
        details.style.backgroundColor = "#F5F5F5";
        details.style.color = "black";
        details.style.transition = "all 0.4s";
        address.style.backgroundColor = "#323232";
        address.style.color = "white";
        address.style.transition = "all 0.6s";
    },500);
}

function form_val(){
    var company_name = document.getElementById("company-name");
    var mailing_name = document.getElementById("mailing-name");
    var company_address = document.getElementById("company-address");
    company_name.onchange = function(){
        if(isNaN(this.value)){
            mailing_name.onchange = function(){
                if(this.value == company_name.value){
                    var wrn = document.getElementById("warning-mail"); 
                    wrn.innerHTML="Mailing Name Should be Company name.pvt.ltd or .govt.ltd";
                    wrn.style.color = "red";
                    this.style.borderBottom = "2px solid red";
                    this.onclick = function(){
                        wrn.innerHTML="";
                        this.value = "";
                        wrn.style.color = "inherit";
                        this.style.borderBottom = "2px solid black";
                    }
                }
                else{
                    var wrn = document.getElementById("warning-mail"); 
                    if(this.value.indexOf(company_name+".pvt.ltd")!=0 || this.value.indexOf(company_name+".govt.ltd")!=0)
                    {
                        var date = document.getElementById("date");
                        date.onchange = function(){
                            var current_date = new Date();
                            var selected_date = new Date(date.value);
                            if(selected_date.getFullYear() >= current_date.getFullYear()){
                                if(selected_date.getMonth()+1==4){
                                    if(selected_date.getDate() == 1){
                                        var next = document.getElementById("next3");
                                        next.onclick = function(){
                                            var phone_number = document.getElementById("company-number");
                                            var fax_number = document.getElementById("fax-number");
                                            var website = document.getElementById("website");
                                            var stock_type=document.getElementById("stock-type");
                                            var cmp_details = {cmp_name:company_name.value,mailing_name:mailing_name.value,address:company_address.value,phone:phone_number.value,fax:fax_number.value,website:website.value,fine:date.value,stock_type:stock_type.value};
                                            var cmp_data = JSON.stringify(cmp_details);
                                            localStorage.setItem("company",cmp_data);
                                            document.getElementById("new-business").style.display="none";
                                        }
                                    }
                                    else{
                                        var wrn = document.getElementById("warning-date");
                                        wrn.innerHTML = "Date Should be 1";
                                        wrn.style.color = "red";
                                        this.style.borderBottom = "2px solid red";
                                        this.onclick = function(){
                                            this.value="dd-mm-yyyy";
                                            wrn.innerHTML="";
                                            wrn.style.color = "inherit";
                                            this.style.borderBottom = "2px solid black";
                                        }
                                    }
                                }
                                else{
                                    var wrn = document.getElementById("warning-date");
                                    wrn.innerHTML = "Month should be april";
                                    wrn.style.color = "red";
                                    this.style.borderBottom = "2px solid red";
                                    this.onclick = function(){
                                        this.value="dd-mm-yyyy"
                                        wrn.innerHTML="";
                                        wrn.style.color = "inherit";
                                        this.style.borderBottom = "2px solid black";
                                    } 
                                }
                            }
                            else{
                                var wrn = document.getElementById("warning-date");
                                wrn.innerHTML = "Passed year not allowed";
                                wrn.style.color = "red";
                                this.style.borderBottom = "2px solid red";
                                var next = document.getElementById("next");
                                this.onclick = function(){
                                    this.value="dd-mm-yyyy"
                                    wrn.innerHTML="";
                                    wrn.style.color = "inherit";
                                    this.style.borderBottom = "2px solid black";
                                }
                            }
                        }
                    }
                    else{
                        wrn.innerHTML = "Mailing Name Should be Company name.pvt.ltd or .govt.ltd";
                        wrn.style.color = "red";
                        this.style.borderBottom = "2px solid red";
                        this.onclick = function(){
                            wrn.innerHTML="";
                            this.value = "";
                            wrn.style.color = "inherit";
                            this.style.borderBottom = "2px solid black";
                        }
                    }
                }
            }
        }
        else{
            var wrn = document.getElementById("warning-cmpny");
            wrn.innerHTML = "Numbers not allowed";
            wrn.style.color = "red";
            this.style.borderBottom = "2px solid red"
            this.onclick = function(){
                wrn.innerHTML = "";
                this.value = "";
                wrn.style.color = "red";
                this.style.borderBottom = "2px solid black";
            }
        }
    }
}

form_val();