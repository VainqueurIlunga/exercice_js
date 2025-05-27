let notes = [14, 9, 5, 18, 3, 10];
//🔧 Affiche seulement les notes supérieures ou égales à 10,
//avec la phrase : "Note validée: X"
//(où X est la note)

for (let note of notes){
    if (note >=10){
        console.log(note,"est la note validée")
    }
}