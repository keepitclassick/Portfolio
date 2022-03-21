function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "keepitclassick@gmail.com",
    Password: process.env.PASS,
    To: "keepitclassick@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Website Inquiry",
    Body: document.getElementById("message").value,
  }).then((message) => console.log(message));
}
