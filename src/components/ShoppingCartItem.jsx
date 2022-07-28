import React from 'react';
import '@styles/ShoppingCartItem.scss';

import caja from '@extras/caja.png';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src={caja} alt="cajita" />
			</figure>
			<p>Box</p>
			<p>$30,00</p>
		</div>
	);
}

export { ShoppingCartItem };