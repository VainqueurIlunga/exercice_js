const nom = "Franck Vainqueur"
let math=17
let francais = 15
let histoire = 14
let moyenne = (math+francais+histoire)/3

if (moyenne>= 10 && math>5){
    console.log(nom," est admis avec une moyenne de ",moyenne)
}else{
     console.log(nom," est recalé.avec une moyenne de ",moyenne)
}
