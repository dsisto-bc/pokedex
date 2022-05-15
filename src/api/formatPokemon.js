const formatPokemon = (apiResponse) => {
	const formattedPokemon = {
		name: apiResponse.name,
		image: apiResponse.sprites.front_default,
		types: apiResponse.types.map((typeObj) => typeObj.type.name),
	};
	return formattedPokemon;
};

export default formatPokemon;
