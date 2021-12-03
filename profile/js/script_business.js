// cjheck company
window.onload=function check_cmp(){
    if(localStorage.getItem("company") != null)
    {
        document.getElementById("new-business").style.display="none";
        document.getElementById("account-only").style.display="grid";
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
                                            document.getElementById("account-only").style.display="grid";
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

//ending new company form


//starting account only add invoice coding

//invoice number coding

//invoce number coding

//add button
function add_item(){
    var product_tbody = document.getElementById("add-invoice-tr");
    var tr = document.createElement("TR");
    var td_item = document.createElement("TD");
    var td_price = document.createElement("TD");
    var td_qty = document.createElement("TD");
    var td_unit = document.createElement("TD");
    var td_amount = document.createElement("TD");
    var td_delete = document.createElement("TD");
    var input_item = document.createElement("INPUT");
    input_item.className = "item";
    input_item.type = "text";
    input_item.placeholder = "Item";
    var input_price = document.createElement("INPUT");
    input_price.type = "number";
    input_price.disabled = 'true';
    input_price.placeholder = "0.00";
    var input_qty = document.createElement("INPUT");
    input_qty.type = "number";
    input_qty.disabled = 'true';
    input_qty.placeholder = "1";
    var input_unit = document.createElement("INPUT");
    input_unit.type = "text";
    input_unit.placeholder = "Nos.";
    var input_amount = document.createElement("INPUT");
    input_amount.type = "number";
    input_amount.className = "amount";
    // input_amount.disabled = 'true';
    input_amount.placeholder = "0.00";
    var img = document.createElement("IMG");
    img.src = "images/delete2.svg";
    img.style="cursor:pointer";
    product_tbody.append(tr);
    tr.append(td_item);
    tr.append(td_price);
    tr.append(td_qty);
    tr.append(td_unit);
    tr.append(td_amount);
    tr.append(td_delete);
    td_item.append(input_item);
    td_price.append(input_price);
    td_qty.append(input_qty);
    td_unit.append(input_unit);
    td_amount.append(input_amount);
    td_delete.append(img);
    img.onclick = function(){
        let del_icon_td = this.parentElement;
        let remove_element = del_icon_td.parentElement;
        remove_element.remove();
        let amount_input = document.getElementsByClassName("amount");
        let sub_total = document.getElementById("sub-total");
        let i, sum = Number(0);
        for(i=0;i<amount_input.length;i++){
            sum = sum + Number(amount_input[i].value);
        }
        sub_total.innerHTML = sum;
    }

    input_amount.onkeydown = function(){
        return false;
    }

    input_amount.oncontextmenu = function (){
        return false;
    }

    input_item.oninput = function() {
        input_price.disabled = false;
        input_price.oninput = function(){
            input_qty.disabled = false;
            input_qty.oninput = function(){
                input_amount.value = input_price.value*input_qty.value;
                let amount_input = document.getElementsByClassName("amount");
                let sub_total = document.getElementById("sub-total");
                let i, sum = Number(0);
                for(i=0;i<amount_input.length;i++){
                    sum = sum + Number(amount_input[i].value);
                }
                sub_total.innerHTML = sum;

                this.onkeyup = function(event){
                    if(event.keyCode == 13){
                        document.getElementById("add-invoice-btn").click();
                        var items = document.getElementsByClassName("item");
                        items[amount_input.length-1].focus();
                    }
                }
            }
        }
    }
}

function adding_item(){
    document.getElementById("add-invoice-btn").onclick = () => {
        add_item();
    }
}
adding_item();
//add button

//current-date-invoice
function showing_date(){
    let date = new Date();
    let current_date = date.getDate();
    let current_month = date.getMonth();
    let current_year = date.getFullYear();
    document.getElementById("invoice-date").innerText = `Date: ${current_date}/${current_month+1}/${current_year}`;
}
showing_date();
//current-date-invoice

//ending account only add invoice coding

//clock coding started

function clock(){
    let date = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
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
    let current_day = weekday[date.getDay()];
    let current_hour = date.getHours();
    let current_min = date.getMinutes();
    let current_date = date.getDate();
    let current_month = month[date.getMonth()];
    let current_year = date.getFullYear();
    document.getElementById("day").innerText = current_day;
    document.getElementById("time").innerText = `${current_hour}:${current_min}`;
    document.getElementById("clock-date").innerText = `${current_date}`;
    document.getElementById("Month").innerText = `${current_month}`;
    document.getElementById("Year").innerText = `${current_year}`;
}
setInterval(clock,1000);
//clock coding started

//add tax

let add_tax_btn = document.getElementById("add-tax-btn");
add_tax_btn.onclick = () => {
    let add_tax = document.getElementById("add-tax");
    let add_tax_pop = document.getElementById("add-tax-pop");
    add_tax.style.display = "grid";
    add_tax_pop.style.animation = "popon 0.5s";
    add_tax_pop.style.animationFillMode = "forwards";
    document.onclick = function(e){
        if(e.target.id == 'add-tax'){
            add_tax_pop.style.animation = "popout 0.5s";
            add_tax_pop.style.animationFillMode = "forwards";
            setTimeout(function(){
                add_tax.style.display = 'none';
            },400);     
        }
    }
    let submit_btn_addtax = document.getElementById("submit-button-addtax");
    submit_btn_addtax.onclick = () => {
        add_tax_pop.style.animation = "popout 0.5s";
        add_tax_pop.style.animationFillMode = "forwards";
        setTimeout(function(){
            add_tax.style.display = 'none';
        },400);
    }
    let tax_name = document.getElementById("tax-name");
    let wrn = document.getElementById("wrn-tax1");
    let wrn2 = document.getElementById("wrn-tax2");
    let tax_per = document.getElementById("tax-per");
    submit_btn_addtax = document.getElementById("submit-button-addtax");
    tax_name.onblur = () => {
        if(tax_name.value.indexOf("tax") != -1){
            tax_per.oninput = () => {
                if(tax_per.value.charAt(0).indexOf("%") == -1){
                    if(tax_per.value.indexOf("%") == -1){
                        tax_per.style.borderColor = "red";
                        wrn2.innerHTML = "must add percent symbol";
                        tax_per.onclick = () => {
                            tax_per.style.borderColor = "#C4C4C4";
                            wrn2.innerHTML = "";
                            tax_per.value = "";
                        }
                    }
                    else{
                        submit_btn_addtax.disabled = false;
                    }
                }
                else{
                    tax_per.style.borderColor = "red";
                    wrn2.innerHTML = "This field should not contain % symbol in the start";
                    tax_per.onclick = () => {
                        tax_per.style.borderColor = "#C4C4C4";
                        wrn2.innerHTML = "";
                        tax_per.value = "";
                    }
                }
            }
        }
        else{
            tax_name.style.borderColor = "red";
            wrn.innerHTML = "This field should contain a word named 'tax'";
        }
        tax_name.onclick = () => {
            tax_name.style.borderColor = "#C4C4C4";
            wrn.innerHTML = "";
        }
    }
}



//add tax