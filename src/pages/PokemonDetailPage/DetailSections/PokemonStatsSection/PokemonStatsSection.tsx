import React from "react";
import { StatsProps } from "./Types";
import "./styles.scss";

const PokemonStatsSection = ({ stats }: StatsProps) => (
	<section className='stats'>
		<h2 className='title'>stats</h2>
		<div className='stat-container'>
			{Object.keys(stats).map((statId) => (
				<p className='stat' key={statId}>
					{statId}: {stats[statId]}
				</p>
			))}
		</div>
	</section>
);

export default PokemonStatsSection;
