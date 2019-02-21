const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


function getTrainer(){

    return fetch(TRAINERS_URL).then(resp => resp.json())

}



getTrainer().then(createCardBody)


const mainEl = document.querySelector('main')


function createCardBody(trainers) {

    trainers.forEach( trainer => {

    const cardDivEl = document.createElement('div')
    cardDivEl.className = 'card'
    const cardP = document.createElement('p')
    const addBtn = document.createElement('button')
    const cardUl = document.createElement('ul')
    const pokemonli = document.createElement('li')

    cardP.innerText = trainer.name
    addBtn.innerText = 'Add Pokemon'

    mainEl.appendChild(cardDivEl)
    cardDivEl.appendChild(cardP)
    cardDivEl.appendChild(addBtn)
    cardDivEl.appendChild(cardUl)


  })

}
