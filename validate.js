function toggleButton(nameSelector, profesionSelector) {
  const username = document.querySelector(nameSelector).value;
  const profesion = document.querySelector(profesionSelector).value;
  const submitButton = document.querySelector(".popup__button");

  if (username === "" && profesion === "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

//if (username && profesion) {
//document.getElementsByClassName("submitButtonSelector").disabled = false;
// } else {
// document.getElementById("submitButtonSelector").disabled = true;

//.popup__button
