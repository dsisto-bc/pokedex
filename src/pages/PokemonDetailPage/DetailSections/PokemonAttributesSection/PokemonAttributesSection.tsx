import React from "react";
import { AttributeProps } from "./Types";

import "./styles.scss";

const PokemonAttributesSection = ({ attributes }: AttributeProps) => (
	<section className='attributes'>
		{attributes.map((attribute, i) => (
			<>
				{i !== 0 && (
					<div className='divider-container'>
						<hr className='divider' />
					</div>
				)}
				<div key={attribute[0]}>
					<p className='attribute'>{`${Object.keys(attribute)[0]}: ${Object.values(attribute)[0]}`}</p>
				</div>
			</>
		))}
	</section>
);

export default PokemonAttributesSection;
