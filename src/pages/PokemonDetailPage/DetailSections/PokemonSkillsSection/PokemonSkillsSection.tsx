import React, { useState } from "react";
import { SkillProps } from "./Types";
import "./styles.scss";

const PokemonAbilitiesSection = ({ skills, skillName }: SkillProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className='skills'>
			<h2 className='title-container'>
				<button onClick={() => setIsOpen(!isOpen)} className='basic-button title'>
					{skillName}
				</button>
			</h2>

			{isOpen && (
				<div className='skills-container'>
					{skills.map((skill) => (
						<button className='basic-button skill-button' key={skill}>
							{skill}
						</button>
					))}
				</div>
			)}
		</section>
	);
};

export default PokemonAbilitiesSection;
