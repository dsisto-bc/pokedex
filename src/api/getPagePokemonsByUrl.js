import formatPokemon from "./formatPokemon";

const getPokemonByUrl = async (url) => {
	try {
		let pokemon = await fetch(url);
		pokemon = await pokemon.json();
		return formatPokemon(pokemon);
	} catch (error) {
		console.error(
			"There was an error getting the pokemon page info",
			error
		);
		return [];
	}
};

const getPagePokemonsByUrl = async (pokemonUrls) => {
	const pokemonList = await Promise.all(pokemonUrls?.map(getPokemonByUrl));
	return pokemonList;
};

export default getPagePokemonsByUrl;
