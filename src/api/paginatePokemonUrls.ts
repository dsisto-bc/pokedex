import { Pokemon } from "../Types";

const paginatePokemonUrls = (pokeDexApiData: any, pokemonPerPage: number = 15): string[][] => {
	const pokeDexEntriesURLs = pokeDexApiData.map(({ name, url }) => {
		return url;
	});
	const pokeDexPages = [];

	for (let i = 0; i <= pokeDexEntriesURLs?.length; i = i + pokemonPerPage) {
		const pokeDexPage = pokeDexEntriesURLs?.slice(i, i + pokemonPerPage);
		pokeDexPages.push(pokeDexPage);
	}

	return pokeDexPages;
};

export default paginatePokemonUrls;
