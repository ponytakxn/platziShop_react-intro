import React from 'react';
import '@styles/ProductInfo.scss';

import add_cart from '@icons/bt_add_to_cart.svg';
import caja from '@extras/caja.png';

const ProductInfo = () => {
	return (
		<>
			<img src={caja} alt="cajita" />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Box</p>
				<p>Cajita chikita, no caben tus maquillajes we, guarda accesorios, no sé, PERO ES CHIKITA!</p>
				<button className="primary-button add-to-cart-button">
					<img src={add_cart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export { ProductInfo };