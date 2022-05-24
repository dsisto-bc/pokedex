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
					<p className='attribute'>{`${Object.keys(attribute)[0]}:`}</p>
					<p className='attribute'>{`${Number(Object.values(attribute)[0]) / 10} ${Object.values(attribute)[1]}`}</p>
				</div>
			</>
		))}
	</section>
);

export default PokemonAttributesSection;
