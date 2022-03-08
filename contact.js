document.addEventListener("DOMContentLoaded", function () {
  fields.firstName = document.getElementById("fname");
  fields.email = document.getElementById("email");
  fields.message = document.getElementById("message");
});

function isNotEmpty(value) {
  if (value === null || typeof value === "undefined") return false;
  return value.length > 0;
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function isValid() {
  let valid = true;

  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.message, isNotEmpty);

  return valid;
}
