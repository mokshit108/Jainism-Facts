function formValidation() {

    var sname = document.getElementById("Firstname");
    var slname = document.getElementById("Lastname");
    var page = document.getElementById("PersonAge")
    var passid = document.getElementById("passid");
    var retype_pass = document.getElementById("retype_pass");
    var email = document.getElementById("email");
    var city = document.getElementById("city_name");
    var saddress = document.getElementById("address");
   // var p_phone = document.getElementById("phone");
    var state_option = document.getElementById("States");
    var Country = document.getElementById("Country");

    

   /* var festone=document.getElementById("Festival1");
    var festtwo=document.getElementById("Festival2");
    var festthree=document.getElementById("Festival3");*/
    var Ql=document.getElementById("Qualification");

    var ma = document.getElementById('male');
    var fe = document.getElementById('female');
    var ot = document.getElementById('oth');
    var employ = document.getElementById('Em');
    var umploy = document.getElementById('Um');
    var stud = document.getElementById('St');
    var two = document.getElementById('twop');
    var fiv = document.getElementById('fivep');
    var fivm = document.getElementById('fivemp');
    var mnum = document.getElementById("Mobnum");
    var pin = document.getElementById("pin_no");
    
if (userid_validation(sname, 3, 10)) {
    if (userid_validation(slname, 4, 10)) {
        if(radio_check(ma,fe,ot)){
            if (select(page)) {
                if (ValidateEmail(email)){
                    if (passid_validation(passid, 7, 12)){  
                        if (retype_passid_validation(passid, retype_pass)) {
                                  if (select(state_option)){
                                    if (select(Country)){
                                       if (allnumeric(mnum)) {
                                            if (allLetter(city)) {
                                                if (alphanumeric(saddress))  {
                                                    if (select(Ql)){
                                                        if(radio_check(employ,umploy,stud)){
                                                           if(radio_check(two,fiv,fivm)){
                                                           //if (checkval(festone,festtwo,festthree)){
                                                               if (zip_postal(pin)){
                                                                return true;
                                                                
                                                                }
                                                   // }
                                                           }

                                                        }
                                                    }
                                                }
                                            }  
                                      // }
                                        }
                                    }
                                 }
                     
                           }
                    
                       }
                   }
                }  
           }
       }
    }
    return false;
}
function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("Name/Surname should not be empty / length be between " + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}
function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}
function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z" "]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function retype_passid_validation(passid, retype_pass) {
    if (passid.value == retype_pass.value) {
        return true;
    }
    else {
        alert("Password And Retype Password Dont Match");
        retype_pass.focus();
        return false;
    }
}
function allLetter(check) {
    var letters = /^[A-Za-z]+$/;
    if (check.value.match(letters)) {
        return true;
    }
    else {
        alert('  City Must have alphabet characters only');
        check.focus();
        return false;
    }
}
function select(ucountry)
{
if(ucountry.value == "Default")
{
alert('Please Select your item from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(allnumbers) {
    var numbers = /^[0-9]+$/;
    if (allnumbers.value.match(numbers)) {
        return true;
    }
    else {
        alert(' Mobile/Phone Number Must have numeric characters only');
        allnumbers.focus();
        return false;
    }
}
/*function checkval(festone,festtwo,festthree) {
    if(festone.options[0].checked==false && festtwo.options[1].checked==false && festthree.options[2].checked==false) {
        alert('Please check at least one of the options.');
        fest.focus();
        return false;
    }
    else{
    return true;
    }
}
*/
function radio_check(ma,fe,ot){
    if ( (ma.checked == false ) && (fe.checked == false )&& (ot.checked == false ) )
    {
    alert ( "Please select radio button: " );
    ma.focus();
    return false;
    }
    return true;
    }
    
function zip_postal(pin) {
    var numbers = /^[0-9]+$/;
    if (pin.value.match(numbers) && zip_code.value.length == 6) {
        return true;
    }
    else {
        alert('Zip Code Must have numeric characters only and Length as 6');
        pin.focus();
        return false;
    }
}




