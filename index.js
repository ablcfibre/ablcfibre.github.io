function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_cxzziqi", "template_jq8y937", parms)
    .then(alert("Message envoyé!!"));
}
{
  window.addEventListener("scroll", () => console.log(window.scrollY));
  if (window.scrollY > 300) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = 0;
  }
}

const btn1 = document.getElementById("btn1");
const response = document.getElementById("msg");

btn1.addEventListener("click", () => {
  response.style.visibility = "visible";
});
