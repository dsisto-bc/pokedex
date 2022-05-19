import { Attribute } from "./pages/PokemonDetailPage/DetailSections/PokemonAttributesSection/Types";
import { Profile } from "./pages/PokemonDetailPage/DetailSections/PokemonProfileSection/Types";
import { Stat } from "./pages/PokemonDetailPage/DetailSections/PokemonStatsSection/Types";

export type Pokemon = {
	profile: Profile;
	stats: Stat[];
	types: string[];
	abilities: string[];
	moves: string[];
	attributes: Attribute[];
};

export type PokemonType = {
	name: string;
	damageClass: string;
	weaknesses: {
		defending: string[];
		attacking: string[];
	};
	strengths: {
		defending: string[];
		attacking: string[];
	};
};
