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
const formulaire = document.getElementById("formulaire");
const validation = document.getElementById("validation")
const Prenom = document.getElementById("first");
const Nom = document.getElementById("last");
const Email = document.getElementById("email");
const Anniv = document.getElementById("birthdate");
const Quantite = document.getElementById("quantity");
const Locations = document.getElementsByName("location");
const Conditions = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formulaire.style.display = "block";
  validation.style.display = "none";

}

console.log(modalbg)

// close modal event
modalCls.forEach((cls) => cls.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


function verifFormulaire() {
  let valide = true
  //verifier le prenom
  const errorFirst = document.getElementById("errorfirst");
  if (Prenom.value.length < 2 || Prenom.value == null) {
    errorFirst.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.'
    valide = false
  }

  else {
    errorFirst.innerText = ''
  };


  //verifier le nom
  const errorLast = document.getElementById("errorlast");
  if (Nom.value.length < 2 || Nom.value == null) {
    errorLast.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    valide = false
  }

  else {
    errorLast.innerText = ''
  };


  //verifier l'email
  const errorEmail = document.getElementById("erroremail");
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(Email.value)) {
    valide = false
    errorEmail.innerText = 'Veuillez entrer une adresse email valide'
  }

  else {
    errorEmail.innerText = ''
  };

  //verifier nombre de concours
  const errorQuantity = document.getElementById("errorquantity");
  let quantityRegExp = new RegExp("[0-9]")
  if (!quantityRegExp.test(Quantite.value)) {
    valide = false
    errorQuantity.innerText = 'Veuillez entrer une valeur numérique.'
  }

  else {
    errorQuantity.innerText = ''
  };
  console.log(Anniv.value)

  //verifier date de naissance
  const errorBirthdate = document.getElementById("errorbirthdate");
  if (!Anniv.value) {
    valide = false
    errorBirthdate.innerText = 'Vous devez entrer votre date de naissance.'
  }

  else {
    errorBirthdate.innerText = ''
  };

  //verifier Checkbox
  const errorLocation = document.getElementById("errorlocation");
  let okLocation = false
  for (let i = 0; i < Locations.length; i++) {
    if (Locations[i].checked) {
      okLocation = true
    }
  }

  if (okLocation) {
    errorLocation.innerText = ''
  }

  else {
    valide = false
    errorLocation.innerText = 'Vous devez choisir une option.'
  };

  //verifier conditions d'utilisation
  const errorCheck = document.getElementById("errorcheck");
  if (Conditions.checked) {
    errorCheck.innerText = ''
  }

  else {
    valide = false
    errorCheck.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions.'

  };
  return valide
}


//verification des éléments a l'envoie du formulaire
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  //empeche le formulaire de s'effacer
  event.preventDefault()
  if (verifFormulaire()) {
    console.log("Validé.");
    formulaire.style.display = "none";
    validation.style.display = "block";
  }
  else {
    console.log("Erreur.")
  };


})