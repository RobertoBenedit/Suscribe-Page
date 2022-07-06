

const scriptURL =
    "https://script.google.com/macros/s/AKfycbxzhXU9NoHWbHWx5jmqxi-2sZAYaKwWy2lK7FeVh00LcE9LWg2tAXW-OwpNNRjZno_Z/exec";
const form = document.forms["contact-us"];
const msg = document.getElementById("contact");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Gracias por suscribirte!";
            setTimeout(() => {
               window.location.reload();
            }, 5000);
            form.reset();
            alert("Success!");
        })
        .catch((error) => console.error("Error!", error.message));
});
