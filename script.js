let plateux = [
    ['','',''],
    ['','',''],
    ['','','']
]

let Joueur = "X"

function Joue(ligne, colone){
    if(plateux[ligne][colone] === ''){
         plateux[ligne][colone] = Joueur
        displayPlateux()

      if(Gagne(Joueur)){
        alert(`Le Joueur ${Joueur} est victorieux`)
        RelancerJeux()
        return
      }

      if(Nul()){
        alert("Match nul")
         RelancerJeux()
          return
      }

    Joueur = (Joueur === "X") ? "O" : "X"

    }
    else{
        alert("Vous ne pouver pas jouer ici")
    }
      

}

    function Gagne(joueur){
        for(let ligne = 0; ligne < 3; ligne++){
            if(plateux[ligne][0] === joueur && plateux[ligne][1] === joueur && plateux[ligne][2] === joueur)
            return true
        }
        for(let colone = 0; colone < 3; colone++){
            if(plateux[0][colone] === joueur && plateux[1][colone] === joueur && plateux[2][colone] === joueur)
            return true
        }
        if(plateux[0][0] === joueur && plateux [1][1] === joueur && plateux[2][2] === joueur){
            return true
        }
        if(plateux[0][2] === joueur && plateux [1][1] === joueur && plateux[2][0] === joueur){
            return true
        }
        return false
    }

    function Nul(){
        for(let ligne = 0; ligne < 3; ligne++){
            for(let colone = 0; colone < 3; colone++){
                if(plateux[ligne][colone] === ''){
                    return false
                }
            }

        }
        return true
    }

    function displayPlateux(){       

        const plateuxContaineur = document.querySelector("#plateux")
        plateuxContaineur.innerHTML = ''

        for(let ligne = 0; ligne < 3; ligne++){
                for(let colone = 0; colone < 3; colone++){
                    const cell = document.createElement('div')
                    cell.classList.add("cell")
                    cell.textContent = plateux[ligne][colone]
                    cell.addEventListener("clique", function(){
                        Joue(ligne, colone)
                    })

                    plateuxContaineur.appendChild(cell)
                }
             }
    
   }

   function RelancerJeux(){
    plateux = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    Joueur = 'X'
    displayPlateux()
   }
   displayPlateux()