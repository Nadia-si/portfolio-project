function send(event) {
  event.preventDefault();
  let sendInput = document.querySelector(
    "#exampleFormControlTextarea1, #exampleFormControlInput1"
  );
  console.log(sendInput, value);
}

let form = document.querySelector("#my-form");

form.addEventListener("submit", send);
