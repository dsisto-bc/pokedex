import React from "react";
import { StatsProps } from "./Types";

const PokemonStatsSection = ({ stats }: StatsProps) => (
	<section>
		<h2>stats</h2>
		<div>
			{Object.keys(stats).map((statKey) => {
				<p key={statKey}>{statKey}: stats.key</p>;
			})}
		</div>
	</section>
);

export default PokemonStatsSection;
