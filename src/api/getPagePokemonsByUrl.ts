import { Pokemon } from "../Types";
import formatPokemon from "./formatPokemon";

const getPokemonByUrl = async (url: string): Promise<Pokemon | null> => {
	try {
		let pokemon = await fetch(url);
		pokemon = await pokemon.json();
		return formatPokemon(pokemon);
	} catch (error) {
		console.error("There was an error getting the pokemon page info", error);
		return null;
	}
};

const getPagePokemonsByUrl = async (pokemonUrls: string[]): Promise<(Pokemon | null)[]> => {
	const pokemonList = await Promise.all(pokemonUrls?.map((url) => getPokemonByUrl(url)));
	return pokemonList;
};

export default getPagePokemonsByUrl;
