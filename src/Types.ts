export type Pokemon = {
	name: string;
	image: string;
	height: number;
	weight: number;
	stats: {
		[statName: string]: number;
	};
	types: string[];
	abilities: string[];
	moves: string[];
};
