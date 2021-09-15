// Code from Rosie's Resume and slightly amended
function sendMail(contactForm) {
    emailjs.send("service_ny0myoh","template_djem23l",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "website_enquiry": contactForm.enquirytype.value,
    })

    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    }
    );
    return false;  // To block from loading a new page
}


