class Eleve {
  constructor(nom, cote) {
    this.nom = nom;
    this.cote = cote;
  }

  afficheInfo() {
    console.log(`Nom: ${this.nom}, Note: ${this.cote}`);
  }

  estAdmis() {
    return this.cote >= 10;
  }
}

let franck = new Eleve("Franck", 17);
let sara = new Eleve("Sara", 8);
let ali = new Eleve("Ali", 12);
franck.afficheInfo();
sara.afficheInfo();
ali.afficheInfo();
console.log(`Est-ce que Franck est admis ? ${franck.estAdmis()}`);
console.log(`Est-ce que Sara est admis ? ${sara.estAdmis()}`);
console.log(`Est-ce que Ali est admis ? ${ali.estAdmis()}`);
