const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("tel");

const form = document.getElementById("form");
const button = document.getElementById("button")


const validate = (e) => {
e.preventDefault();
if (firstName.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
  if (email.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }
  
  return true;
}


button.addEventListener('click', validate); 