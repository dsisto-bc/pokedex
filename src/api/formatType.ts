import { PokemonType } from "../Types";
import { POKEAPI_BASE_URL } from "./constants";

const formatType = async (type: string): Promise<PokemonType> => {
	try {
		let res = await fetch(`${POKEAPI_BASE_URL}/type/${type}`);

		if (res.status < 400) {
			const typeApiData = await res.json();
			const damageRelations =
				typeApiData.past_damage_relations.damage_relations;

			const formattedTypeData = {
				name: type,
				damageClass: typeApiData.move_damage_class.name,
				weaknesses: {
					defending: damageRelations.double_damage_from.map(
						(type) => type.name
					),
					attacking: damageRelations.double_damage_to.map(
						(type) => type.name
					),
				},
				strengths: {
					defending: damageRelations.half_damage_to.map(
						(type) => type.name
					),
					attacking: damageRelations.half_damage_from.map(
						(type) => type.name
					),
				},
			};

			return formattedTypeData;
		} else {
			//fetch doesnt take status numbers higher as 400 as an error, just an exception, so i manually throw the error
			throw new Error(
				`Error getting type information from server. status: ${res.status}`
			);
		}
	} catch (error) {
		console.error("Error fetching type information", error);
		return {
			name: "unable to get type",
			damageClass: "unable to get damage class",
			weaknesses: {
				defending: [],
				attacking: [],
			},
			strengths: {
				defending: [],
				attacking: [],
			},
		};
	}
};
export default formatType;
