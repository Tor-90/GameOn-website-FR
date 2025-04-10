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
const Anniv = document.getElementById("birthdate");
const Quantite = document.getElementById("quantity");
const Location1 = document.getElementById("location1");
const Location2 = document.getElementById("location2");
const Location3 = document.getElementById("location3");
const Location4 = document.getElementById("location4");
const Location5 = document.getElementById("location5");
const Location6 = document.getElementById("location6");
const Conditions = document.getElementById("checkbox1");

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
    okEmail = false
    errorEmail.innerText = 'Veuillez entrer une adresse email valide'
  }

  else {
    okEmail = true;
  };

  //verifier nombre de concours
  const errorQuantity = document.getElementById("errorquantity");
  let quantityRegExp = new RegExp("[0-9]")
  if (quantityRegExp.test(Quantite.value) || Quantite.value == null) {
    okQuantite = false
    errorQuantity.innerText = 'Veuillez entrer une valeur numérique.'
  }

  else {
    okQuantite = true;
  };

  //verifier date de naissance
  const errorBirthdate = document.getElementById("errorbirthdate");
  if (Anniv.value == null) {
    okBirthdate = false
    errorBirthdate.innerText = 'Vous devez entrer votre date de naissance.'
  }

  else {
    okBirthdate = true;
  };

  //verifier Checkbox
  const errorLocation = document.getElementById("errorlocation");
  if (Location1.checked || Location2.checked || Location3.checked || Location4.checked || Location5.checked || Location6.checked) {
    okLocation = true
  }

  else {
    okLocation = false
    errorLocation.innerText = 'Vous devez choisir une option.'

  };

  //verifier conditions d'utilisation
  const errorCheck = document.getElementById("errorcheck");
  if (Conditions.checked) {
    okCheck = true
  }

  else {
    okCheck = false
    errorCheck.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions.'

  };

}


//verification des éléments a l'envoie du formulaire
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  //empeche le formulaire de s'effacer
  event.preventDefault()
  verifFormulaire()
  if (okFirst == true && okLast == true && okEmail == true && okQuantite == true && okBirthdate == true && okLocation == true && okCheck == true) {
    console.log("Validé.")
    closeModal()
    popup()
    
  }
  else {
    console.log("Erreur.")
  };


})
