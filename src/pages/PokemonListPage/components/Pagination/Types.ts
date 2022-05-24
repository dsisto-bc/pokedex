export type PaginationFooterProps = {
	setPokemonPageIndex: (index: number) => void;
	pokemonPageListLength: number;
	pokemonPageIndex: number;
};

export type PaginationHeaderProps = {
	setPokemonPerPage: (index: number) => void;
	pokemonPerPage: number;
};
