// https://www.w3resource.com/javascript/form/non-empty-field.php

function required()
{
var empt = document.forms["form1"]["text1"].value;
if (empt == "")
{
alert("Please fill in the form");
return false;
}
else 
{
alert('Thank you for contacting us, we have recieved your enquiry and will reply to you soon');
return true; 
}
}