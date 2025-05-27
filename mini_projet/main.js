const elevesss = [
  { nom: "Ali", note: 12 },
  { nom: "Sara", note: 8 },
  { nom: "Franck", note: 17 },
  { nom: "Noah", note: 4 },
  { nom: "Lina", note: 15 },
];

function getAll(eleves) {
  for (let eleve of eleves) {
    console.log(`Nom: ${eleve.nom}, Note: ${eleve.note}`);
  }
}

function getEleveAdmi(eleves) {
  let elevesAdmis = [];
  for (let eleve of eleves) {
    if (eleve.note >= 10) {
      elevesAdmis.push(eleve);
    }
  }
  return elevesAdmis;
}

function moyenne(eleves) {
  let total = 0;
  for (let eleve of eleves) {
    total += eleve.note;
  }
  return total / eleves.length;
}
let moy = moyenne(elevesss);
console.log(`La moyenne des notes est: ${moy}`);

function getEleve(eleves) {
  for (let eleve of eleves) {
    if (eleve.note >= 10) {
      console.log(`Félicitations, ${eleve.nom} a validé avec ${eleve.note}!`);
    } else {
      console.log(`courage, ${eleve.nom} n'a pas validé.`);
    }
  }
}
