let listesMots = ["Cachalot", "Pétunia", "Serviette"]

let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste","Merci pour le poisson"]

let score = 0

let answer = prompt("Vouler vous la listes des mots ou des phrases ?")

while (answer !== "mots" && answer !== "phrases"){
      
answer = prompt("Vouler vous la listes des mots ou des phrases ?")
}
        switch (answer) {
            case "mots":
                for (i = 0; i < listesMots.length; i++){

                   let MotUtilisateur = prompt("Entrez le mot: " + listesMots [i])
                
                 if (listesMots [i] === MotUtilisateur) {
                
                  score++ }}

                  console.log("Votre score est de " + score + "sur" + listesMots.length)

                 break
            case "phrases":
                 for (i = 0; i < listePhrases.length; i++){

                   let MotUtilisateur = prompt("Entrez le mot: " + listePhrases [i])
             
                 if (listePhrases [i] === MotUtilisateur) {
             
                 score++ }}

                 console.log("Votre score est de " + score + "sur" + listePhrases.length)

                 break
}
