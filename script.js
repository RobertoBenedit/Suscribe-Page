// const scriptURL =
//     "https://script.google.com/macros/s/AKfycbyUL1hq16rc297FJvXJVf1x0zYhCYjp-JA7zB4ojjamKK61RyuWoqBVYlkzkq1dbGLM/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     fetch(scriptURL, { method: "POST", body: new FormData(form) })
//         .then((response) => {
//             msg.innerHTML = "Gracias por suscribirte!";
//             setTimeout(() => {
//                 msg.innerHTML = "";
//             }, 5000);
//             form.reset();
//         })
//         .catch((error) => console.error("Error!", error.message));
// });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxzhXU9NoHWbHWx5jmqxi-2sZAYaKwWy2lK7FeVh00LcE9LWg2tAXW-OwpNNRjZno_Z/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          document.form.reset
      })
      .catch(error => console.error('Error!', error.message))
  })

// https://script.google.com/macros/s/AKfycbxzhXU9NoHWbHWx5jmqxi-2sZAYaKwWy2lK7FeVh00LcE9LWg2tAXW-OwpNNRjZno_Z/exec