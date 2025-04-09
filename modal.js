function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCls = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

console.log(modalbg)

// close modal event
modalCls.forEach((cls) => cls.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


const Prenom = document.getElementById("first");
const Nom = document.getElementById("last");
const Email = document.getElementById("email");
const Date = document.getElementById("birthdate");
const Quantite = document.getElementById("quantity");
const Location1 = document.getElementById("location1");
const Location2 = document.getElementById("location2");
const Location3 = document.getElementById("location3");
const Location4 = document.getElementById("location4");
const Location5 = document.getElementById("location5");
const Location6 = document.getElementById("location6");

const errorBirthdate = document.getElementById("errorbirthdate");


function verifFormulaire() {

  //verifier le prenom
  const errorFirst = document.getElementById("errorfirst");
  if (Prenom.value.length < 2 || Prenom.value == null) {
    okFirst = false
    errorFirst.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.'

  }

  else {
    okFirst = true;
  };


  //verifier le nom
  const errorLast = document.getElementById("errorlast");
  if (Nom.value.length < 2 || Nom.value == null) {
    okLast = false
    errorLast.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'

  }

  else {
    okLast = true;
  };


  //verifier l'email
  const errorEmail = document.getElementById("erroremail");
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegExp.test(Email.value) || Email.value == null) {
    errorEmail.innerText = 'Veuillez entrer une adresse email valide'
    okEmail = false
  }

  else {
    okEmail = true;
  };

}


//verification des éléments a l'envoie du formulaire
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  verifFormulaire()
  if (okFirst == true && okLast == true && okEmail == true) {
    console.log("Validé.")
  }
  else {
    console.log("Erreur.")
  };

  
})
