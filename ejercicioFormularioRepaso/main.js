//elegir fecha nacimiento: día
var daysList = document.getElementById('.js-birthday day');

for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    daysList.appendChild(option);
}

//mes
var monthsList = document.getElementById('.js-birthday month');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 0; i < months.length; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.text = months[i];
  monthsList.appendChild(option);
}

 //año
var yearsList = document.getElementById('.js-birthday year');

for (var i = 1900; i <= 2017; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    yearsList.appendChild(option);
}

 //validar mail
var email= document.getElementById(".mail").value;
var reEmail= document.getElementById('.remail').value;
var name= document.getElementById('.firstName').value;


function validateEmail(){
if (email === reEmail){
  alert("Gracias" + name + " , la cuenta se creó correctamente.")
} else {
  alert("No se pudo crear la cuenta")
  document.getElementById('.remail').style.borderColor = "red";
}
}

var submitButton = document.querySelector('.button-submit');
submitButton.addEventListener("click", validateEmail);
