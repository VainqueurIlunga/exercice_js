let elevess = [
  { nom: "Ali", note: 12 },
  { nom: "Sara", note: 8 },
  { nom: "Franck", note: 17 },
  { nom: "Noah", note: 4 },
];

function getPush(eleves) {
  let elevesAdmis = [];
  for (let eleve of eleves) {
    if (eleve.note >= 10) {
      elevesAdmis.push(eleve);
    }
  }
  return elevesAdmis;
}

let elev = getPush(elevess);
console.log(elev);
function getfilter(eleves) {
  return eleves.filter((eleve) => eleve.note >= 10);
}
let elev2 = getfilter(elevess);
console.log(elev2);
