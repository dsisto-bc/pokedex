import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const PageNotFound = () => {
	// failing messages taken from https://bulbapedia.bulbagarden.net/wiki/Catch_rate#Quotes
	const failingMessages = [
		"You missed the Pokémon!",
		"Darn! The Pokémon broke free!",
		"Aww! It appeared to be caught!",
		"Shoot! It was so close too!",
		"Oh no! The Pokémon broke free!",
		"Aargh! Almost had it!",
		"Gah! It was so close, too!",
	];
	return (
		<main className='page-not-found'>
			<h1 className='title'>{failingMessages[Math.floor(Math.random() * failingMessages.length)]}</h1>
			<p className='subtitle'> We couldn't catch the pokemon you're looking for</p>
			<div className='image-container'>
				<img alt='page-not-found' className='image' src='/404-worried-pokeball.png' />
			</div>
			<Link className='basic-button button' to='/'>
				Go back to main page
			</Link>
		</main>
	);
};

export default PageNotFound;
