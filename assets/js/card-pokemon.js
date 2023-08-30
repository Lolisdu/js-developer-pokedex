const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImage = document.querySelector('.pokemon-image');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

    const renderPokemon =async (pokemon) => {
        const data = await fetchPokemon(pokemon);

        if(data) {
            pokemonImage.style.display = 'block';
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['other']['dream_world']['front_default'];
            searchPokemon = data.id;
        }else {
            pokemonImage.style.display = "none";
            pokemonName.innerHTML = 'Nor Found';
            pokemonNumber.innerHTML = '';
        }    
};

buttonPrev.addEventListener('click', () => {
    if(searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});


buttonNext.addEventListener('click', () => {
   searchPokemon += 1;
   renderPokemon(searchPokemon);

});

renderPokemon(searchPokemon);