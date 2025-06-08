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
<<<<<<< HEAD
      window.location.href = "https://emelianfurest.com/";
=======
      window.location.href = "/";
>>>>>>> fa622b7f9e425804733321163106a763fd505489
    });
}
