// pokeapi.co will be the source of RESTful Pokemon API

const poke_container = document.getElementById('poke-container')
const pokemon_count =  500
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const fetchPokemons = () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.jason()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}" alt="">
    </div>
    <div class="info">
        <span class="number">#001</span>
        <h3 class="name">Bulbasaur</h3>
        <small class="type">Type: <span>grass</span></small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}