function affscore (scoref, nomProp) {
  let spanScore = document.querySelector(".zoneScore span")
  let affichageScore = `${scoref} / ${nomProp}`
  spanScore.innerText = affichageScore
  console.log("Votre score est de " + scoref + " sur " + nomProp)
}

function Choix () {
  let answer = prompt("Vouler vous la listes des mots ou des phrases ?")
  while (answer !== "mots" && answer !== "phrases"){
      
    answer = prompt("Vouler vous la listes des mots ou des phrases ?")
    }
    return answer
}

function LancBoucJeu (ListesProp) {
  for (i = 0; i < ListesProp.length; i++){
Valider

    let MotUtilisateur = prompt("Entrez le mot: " + ListesProp [i])
 
  if (ListesProp [i] === MotUtilisateur) {
 
   score++ }}
   return score
}
function LancJeu () {
let answer = Choix ()
let NumMotProp = 0
  switch (answer) {
    case "mots": 
      LancBoucJeu (listeMots)
      NumMotProp = listeMots.length
      break
    case "phrases":
      LancBoucJeu (listePhrases)
      NumMotProp = listePhrases.length
      break
  }

affscore (score, NumMotProp)
}