const scriptURL =
    "https://script.google.com/macros/s/AKfycbxzhXU9NoHWbHWx5jmqxi-2sZAYaKwWy2lK7FeVh00LcE9LWg2tAXW-OwpNNRjZno_Z/exec";
const form = document.forms["contact-us"];
const msg = document.getElementById("contact");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Gracias por suscribirte!";
            alert("Envio Exitoso!");
            setTimeout(() => {
                window.location.href = "https://www.instagram.com/rocomunica/";
            }, 5000);
            // form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});
