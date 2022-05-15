const pokemonPerPage = 20;

const paginatePokemonUrls = (pokeDexApiData) => {
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
