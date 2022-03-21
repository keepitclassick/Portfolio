function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "keepitclassick@gmail.com",
    Password: "Toodles52",
    To: "keepitclassick@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Website Inquiry",
    Body:
      "name:" +
      document.getElementById("fname").value +
      "<br> email:" +
      document.getElementById("email").value +
      "<br>message:" +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}
