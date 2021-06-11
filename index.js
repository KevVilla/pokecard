var Pokemons = [{name: "Mewtwo",url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",id:1},{name:"Pikachu",url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",id:2},{name:"Bulbasaur",url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",id:3}];

// SECTION DE CARDS 
const pokecardMain = document.getElementById('pokecards-main')

Pokemons.forEach((e)=>{
    const pokecardSection = document.createElement('div')
    pokecardSection.classList.add('card' ,'pokecard__section')
    pokecardSection.id = `card${e.id}`

    const imageSection = document.createElement('img')
    imageSection.classList.add('pokecard__section--image')
    imageSection.src = e.url

    const titlePokemon = document.createElement('h2')
    titlePokemon.classList.add('pokecard__section--title')
    titlePokemon.textContent = e.name   

    pokecardSection.appendChild(imageSection)
    pokecardSection.appendChild(titlePokemon)

    pokecardMain.appendChild(pokecardSection)
})

class Pokemon{
    constructor(name,url){
        this.name= name
        this.url = url
    }
    addPokemon(){
        const pokemon = {
            name: this.name,
            url: this.url,
            id: Pokemons.length+1
        }
        const pokecardSection = document.createElement('div')
        pokecardSection.classList.add('card' ,'pokecard__section')
        pokecardSection.id = `card${pokemon.id}`

        const imageSection = document.createElement('img')
        imageSection.classList.add('pokecard__section--image')
        imageSection.src = pokemon.url

        const titlePokemon = document.createElement('h2')
        titlePokemon.classList.add('pokecard__section--title')
        titlePokemon.textContent = pokemon.name

        pokecardSection.appendChild(imageSection)
        pokecardSection.appendChild(titlePokemon)

        pokecardMain.appendChild(pokecardSection)
        Pokemons.push(pokemon)
    }
}

const namePokemon = document.getElementById('name-pokemon')
const nameImage = document.getElementById('name-image')
const imagePokemonDiv = document.getElementById('pokecard-add__form-image')

const addPokemon = (name)=> {
    const imagePokemon = document.createElement('img')
    imagePokemon.id = 'pokecard-add--image'
    imagePokemon.src = name
    imagePokemonDiv.appendChild(imagePokemon)

    const pokemon = new Pokemon(namePokemon.value,name)
    pokemon.addPokemon()
}

const buttonAdd = document.getElementById('button-add')

buttonAdd.addEventListener('click',()=>{
    if(imagePokemonDiv.childElementCount > 0){
        imagePokemonDiv.removeChild(document.getElementById('pokecard-add--image'))
    }
    addPokemon(nameImage.value)
})

