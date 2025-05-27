let eleves = [
  { nom: "Ali", note: 12 },
  { nom: "Sara", note: 8 },
  { nom: "Franck", note: 17 },
  { nom: "Noah", note: 4 },
];
//🔧 Affiche pour chaque élève admis (note ≥ 10) :
//"Félicitations, [nom] a validé avec [note]!"
for (let eleve of eleves) {
  if (eleve.note >= 10) {
    console.log("Felicitation, ", eleve.nom, " a validé avec ", eleve.note);
  }
}

function afficherElevesAdmis(eleves) {
  for (let eleve of eleves) {
    if (eleve.note >= 10) {
      console.log(`Félicitations, ${eleve.nom} a validé avec ${eleve.note}!`);
    }
  }
}
afficherElevesAdmis(eleves);
