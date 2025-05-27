const afficherEleveAdmis = (eleves) => {
  eleves.forEach((eleve) => {
    if (eleve.note >= 10) {
      console.log(`Félicitations, ${eleve.nom} a validé avec ${eleve.note}!`);
    }
  });
};
