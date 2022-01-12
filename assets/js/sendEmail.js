// Code from Rosie's Resume and slightly amended
let contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    sendMail()
})

function sendMail() {
    emailjs.send("service_ny0myoh", "template_djem23l", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "website_enquiry": contactForm.enquirytype.value,
        })
        .then(function () {
            console.log('SUCCESS!');
            alert('Thank you for contacting us, we have recieved your enquiry and will reply to you soon')
        }, function (error) {
            console.log('FAILED...', error);
            alert('We had a problem with sending your message, please try again.')
        });
}