import React from "react";
import { AttributeProps } from "./Types";

import "./styles.scss";

const PokemonAttributesSection = ({ attributes }: AttributeProps) => (
	<section className='attributes'>
		{attributes.map((attribute, i) => (
			<div key={attribute[0]}>
				{i !== 0 && <hr />}
				<p className='attribute'>
					{`${Object.keys(attribute)[0]}: ${
						Object.values(attribute)[0]
					}`}
				</p>
			</div>
		))}
	</section>
);

export default PokemonAttributesSection;
