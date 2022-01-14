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
var store_subtotal, store_tax = [], store_total, store_paid, store_dues;
var all_voucher_no = 1;
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
    input_price.className = "price";
    input_price.type = "number";
    input_price.disabled = 'true';
    input_price.placeholder = "0.00";
    var input_qty = document.createElement("INPUT");
    input_qty.className = "qty";
    input_qty.type = "number";
    input_qty.disabled = 'true';
    input_qty.placeholder = "1";
    var input_unit = document.createElement("INPUT");
    input_unit.className = "unit";
    input_unit.type = "text";
    input_unit.placeholder = "Nos.";
    var input_amount = document.createElement("INPUT");
    input_amount.className = "amount";
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
            store_subtotal = sum + Number(amount_input[i].value);
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
        this.onkeyup = function(event){
            if(event.keyCode == 13){
                let item_parent = this.parentElement;
                let tr = item_parent.parentElement;
                tr.getElementsByTagName("INPUT")[1].focus();
            }
        }
        input_price.disabled = false;
        input_price.oninput = function(){
            this.onkeyup = function(event){
                if(event.keyCode == 13){
                    let item_parent = this.parentElement;
                    let tr = item_parent.parentElement;
                    tr.getElementsByTagName("INPUT")[2].focus();
                }
            }
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

                var reserve=0;
                for(i=0;i<localStorage.length;i++){
                    var tax_key = localStorage.key(i);
                    if(tax_key.indexOf("tax") != -1){
                        var tax_item = localStorage.getItem(tax_key);
                        var extract = JSON.parse(tax_item);
                        reserve = reserve + extract.tax + "<br>";
                        document.getElementById("tax").innerHTML = `<span id="percentage" style="display:none">${reserve.replace(0,"")}<span>`;
                    }
                }

                let total1 = 0;
                split_num = document.getElementById("percentage").innerText;
                var final_num = split_num.split("%");
                for(i=0;i<final_num.length-1;i++){
                    var fixed =  Number((sum*final_num[i]/100).toFixed(2));
                    store_tax[i] = Number((sum*final_num[i]/100).toFixed(2));
                    document.getElementById("tax").innerHTML += `${fixed}<br>`;
                    total1 = total1 + fixed;
                }
                var total = Number((total1+sum).toFixed(2));
                store_total = ((total1+sum).toFixed(2));
                document.getElementById("total").innerHTML = ((total1+sum).toFixed(2));
                document.getElementById("due").innerHTML = ((total1+sum).toFixed(2));
                let paid = document.getElementById("paid");
                paid.oninput = () =>{
                    store_paid = Number(document.getElementById("paid2").value);
                    var paid_value = Number(document.getElementById("paid2").value);
                    var due_amt = Number(total - paid_value);
                    store_dues = Number(total - paid_value);
                    document.getElementById("due").innerHTML = due_amt;
                }

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
    var tax_display = document.getElementById("tax-col");
    var j;
    for(j=0; j<localStorage.length; j++){
        let tax_name = localStorage.key(j);
        if(tax_name.indexOf("tax") != -1){
            var tax_item = localStorage.getItem(tax_name);
            var extract = JSON.parse(tax_item);
            tax_display.innerHTML += `${extract.name}(${extract.tax}) <br>`;
            var sub_total = document.getElementById("sub-total").innerHTML;
            document.getElementById("tax").innerHTML += `${sub_total} <br>`
        }
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
                        submit_btn_addtax.onclick = () =>{
                            let tax_details = {name:tax_name.value, tax:tax_per.value};
                            let tax_string = JSON.stringify(tax_details);
                            localStorage.setItem(tax_name.value, tax_string);  
                            add_tax_pop.style.animation = "popout 0.5s";
                            add_tax_pop.style.animationFillMode = "forwards";
                            setTimeout(function(){
                                add_tax.style.display = 'none';
                            },400);
                        }
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


// printing

var printme = document.getElementById("print");
printme.onclick = function(){
    var Company = window.localStorage.getItem('company');
    var company_data = JSON.parse(Company);
    var name = company_data.mailing_name;
    printJS({
        printable: 'add-invoice',
        type: 'html',
        targetStyle: ['*'],
        header: name,
        gridStyle: 'border: 1px solid red;',
        css: "css/printing.css"
    })
}

// printing

//storing voucher details
var saved = document.getElementById("save");
var i, storeItem = [], storePrice = [], storeQty = [], storeUnit = [], storeAmount = [];
saved.onclick = () =>{
    saving();
}
function saving(){
    let buyer_name = document.getElementById("cstmr-name").value;
    let buyer_email = document.getElementById("cstmr-email").value;
    let buyer_date = document.getElementById("cstmr-date").value;
    let buyer_phone = document.getElementById("cstmr-num").value;
    let buyer_item = document.getElementsByClassName("item");
    for(i=0;i<buyer_item.length;i++){
        storeItem[i] = buyer_item[i].value;
    }
    let buyer_price = document.getElementsByClassName("price");
    for(i=0;i<buyer_price.length;i++){
        storePrice[i] = buyer_price[i].value;
    }
    let buyer_qty = document.getElementsByClassName("qty");
    for(i=0;i<buyer_qty.length;i++){
        storeQty[i] = buyer_qty[i].value;
    }
    let buyer_unit = document.getElementsByClassName("unit");
    for(i=0;i<buyer_unit.length;i++){
        storeUnit[i] = buyer_unit[i].value;
    }
    let buyer_amount = document.getElementsByClassName("amount");
    for(i=0;i<buyer_amount.length;i++){
        storeAmount[i] = buyer_amount[i].value;
    }
    let buyer_object = {buyer_name:buyer_name,buyer_email:buyer_email,buyer_date:buyer_date,buyer_phone:buyer_phone,storeItem:storeItem,storePrice:storePrice,storeQty:storeQty,storeUnit:storeUnit,storeAmount:storeAmount,store_subtotal:store_subtotal,store_tax:store_tax,store_total:store_total,store_paid:store_paid,store_dues:store_dues};
    let buyer_details = JSON.stringify(buyer_object);

    localStorage.setItem("voucher_no_" + all_voucher_no, buyer_details);
    var count = localStorage.length - 3;
    voucherNo(count);
    history.go(0);
}


function voucherNo(count){
    for(i=0;i<=localStorage.length;i++){
        let all_keys = localStorage.key(i);
        if(all_keys.match("voucher_no_")){
            count = count + 1;
            all_voucher_no = count;
            document.getElementById("invoice-number").innerHTML = all_voucher_no;
            return false;  
        }
    }
}
voucherNo(localStorage.length - 3);

//search voucher

function search_voucher()
{
    var search_field = document.getElementById("search-field");
    search_field.onkeyup = (event) =>
    {
        if(event.keyCode == 13)
        {
            var user_input = `voucher_no_` + search_field.value;
            var i;
            for(i=0;i<=localStorage.length;i++){
                var all_keys = localStorage.key(i);
                if(all_keys == user_input){
                    var buyer_string = localStorage.getItem(all_keys);
                }
            }
        }
    }
}
search_voucher();
//search voucher

function invoice_sheet(){
    let i,j;
    let count = 1;
    for(i=1;i<localStorage.length+10;i++){
        for(j=0;j<localStorage.length;j++){
            if(localStorage.key(j) == `voucher_no_${i}`){

                var details = localStorage.getItem(`voucher_no_${i}`);
                var data = JSON.parse(details);

                let tbody_sheet = document.getElementById("invoice-body");
                let tr = document.createElement("TR");
                let td1 = document.createElement("TD");
                td1.innerHTML = count;
                count++;
                let td2 = document.createElement("TD");
                td2.innerHTML = data.buyer_date;
                let td3 = document.createElement("TD");
                td3.innerHTML = data.buyer_name;
                let td4 = document.createElement("TD");
                td4.innerHTML = data.store_dues;
                let td5 = document.createElement("TD");
                let img = document.createElement("IMG");
                if(data.store_dues > 0){
                    img.src = "images/due.svg";
                }
                else if(data.store_dues < 0){
                    img.src = "images/na.svg";
                }
                else{
                    img.src = "images/paid.svg";
                }
                td5.appendChild(img);
                tbody_sheet.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);

            }
        }
    }
}
invoice_sheet();

//showing tax
// function tax_showing(){
//     for(i=1;i<localStorage.length+10;i++){
//         let all_keys = localStorage.getItem(i);
//         if(all_keys.match("tax")){

            

//         }
//     }
// }
// tax_showing();