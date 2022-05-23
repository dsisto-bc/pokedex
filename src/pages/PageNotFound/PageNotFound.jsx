import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const PageNotFound = () => {
	return (
		<main className='page-not-found'>
			<h1 className='title'>We're sorry!</h1>
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
