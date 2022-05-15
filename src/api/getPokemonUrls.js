import formatPokemon from "./formatPokemon";
import paginatePokemonUrls from "./paginatePokemonUrls";

const getPokemonUrls = async () => {
	try {
		let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");

		if (res.status < 400) {
			const pokemonList = await res.json();
			const paginatedPokemonUrlList = paginatePokemonUrls(
				pokemonList.results
			);

			return paginatedPokemonUrlList;
		} else {
			//fetch doesnt take status numbers higher as 400 as an error, just an exception, so i manually throw the error
			throw new Error(
				`Error getting pokemons from server. status: ${res.status}, Error: ${res.message}`
			);
		}
	} catch (error) {
		console.error("Error fetching pokemons", error);
		return [];
	}
};
export default getPokemonUrls;
