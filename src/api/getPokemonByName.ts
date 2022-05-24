import { POKEAPI_BASE_URL } from "./constants";
import formatPokemon from "./formatPokemon";
import { Pokemon } from "../Types";

const getPokemonByName = async (pokemon: string): Promise<Pokemon | null> => {
	try {
		let pokemonEntry = await fetch(`${POKEAPI_BASE_URL}/pokemon/${pokemon}`);
		pokemonEntry = await pokemonEntry.json();
		const pokemonData = formatPokemon(pokemonEntry);
		return pokemonData;
	} catch (error) {
		console.error("There was an error getting the pokemon requested", error);
		return null;
	}
};
export default getPokemonByName;
