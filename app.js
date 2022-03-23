const contactForm = document.querySelector("#contact-form");
let name = document.getElementById("fname");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  let request = new XMLHttpRequest();
  request.open("POST", "/");
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = () => {
    console.log(request.responseText);
    if (request.responseText === "success") {
      alert("Message sent!");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      alert("Something went wrong!");
    }
  };

  request.send(JSON.stringify(formData));
});
