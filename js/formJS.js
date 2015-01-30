function check_empty(){
if(document.getElementById('name').value == "" 
|| document.getElementById('studentid').value == "" 
|| document.getElementById('email').value == "" 
|| document.getElementById('msg').value == ""
|| document.getElementById('gradTerm').value == "-"
|| document.getElementById('class').value == "-" 
|| document.getElementById('degree').value == "-" 
|| document.getElementById('year').value == "" ){
alert ("Fill All Fields !");
}
else {  
	check_validity();
	}
}

function check_validity(){
    if(document.getElementById('email').value.indexOf("@") == -1){
        alert("Enter a valid Email address.");
    }
    else if(document.getElementById('year').value < 1800 || document.getElementById('year').value > 2100) {
        alert("Enter a valid graduation year.");
    }
    else if (document.getElementById('studentid').value.length != 7) {
        alert("Enter a valid 7 digit Student ID Number");
    }
    else if (isNaN(document.getElementById('studentid').value)){
        alert("Enter a valid numerical Student ID number");
    }
    else if (isNaN(document.getElementById('year').value)){
        alert("Enter a valid numerical year");
    }
    else {
        submitForm()
    }
}

function submitForm() {
    document.getElementById('form').submit();  
        alert ("Thank you for your submission.");
}

//function to display Popup
function div_show(){ 
document.getElementById('abc').style.display = "block";
}

//function to check target element
function check(e){ 
var target = (e && e.target) || (event && event.srcElement); 

var obj = document.getElementById('abc'); 
var obj2 = document.getElementById('popup'); 

checkParent(target)?obj.style.display='none':null; 
target==obj2?obj.style.display='block':null; 

} 

//function to check parent node and return result accordingly
function checkParent(t){ 
	while(t.parentNode){ 
		if(t==document.getElementById('abc'))
			{ 
				return false 
			}
		else if(t==document.getElementById('close'))
			{
				return true
			} 
		t=t.parentNode 
	} 
	return true 
} 
