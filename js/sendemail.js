function enviarEmail(event) {
  event.preventDefault();
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_xqyogzk", "template_ec6nn0n", parms)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      window.location.href = "https://emelianfurest.com/";
    });
}
