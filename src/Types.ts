export type Pokemon = {
	name: string;
	image: string;
	height: number;
	weight: number;
	types: string[];
	stats: {
		[statName: string]: number;
	};
	moves: string;
	abilities: string;
};
