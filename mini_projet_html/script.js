function changerTexte() {
  let titre = document.getElementById("titre");
  // @ts-ignore
  titre.textContent = "Tu maîtrises le DOM 💪";
  // @ts-ignore
  titre.style.color = "blue";
}

function changerCouleur() {
  let titre = document.getElementById("titre");
  // @ts-ignore
  titre.style.color = "red";
  titre.style.fontSize = "30px";
  titre.style.fontWeight = "bold";
  titre.style.textDecoration = "underline";
  titre.style.textAlign = "center";
  titre.style.backgroundColor = "yellow";
  titre.style.padding = "10px";
  titre.style.border = "2px solid black";
  titre.style.borderRadius = "10px";
}
function ajouterParagraphe() {
  let p = document.createElement("p");
  p.textContent = "Un nouveau paragraphe apparaît ✨";
  document.getElementById("zone").appendChild(p);
}

function direBonjour() {
  let nom = document.getElementById("prenom").value;
  document.getElementById("message").textContent = `Bonjour ${nom} 😊`;
}
