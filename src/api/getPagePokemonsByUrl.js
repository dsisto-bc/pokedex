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

const getPagePokemonsByUrl = async (pokemonUrls, pokemonPerPage) => {
	const pokemonList = await Promise.all(
		pokemonUrls?.map((url) => getPokemonByUrl(url, pokemonPerPage)) ?? []
	);
	return pokemonList;
};

export default getPagePokemonsByUrl;
