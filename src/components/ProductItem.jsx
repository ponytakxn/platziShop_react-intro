import React, { useState, useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';

import add_cart from '@icons/bt_add_to_cart.svg';
import added_to_cart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart, state } = useContext(AppContext);
	
	const isProductAdded = () => state.cart.some((item) => item.id === product.id) ? true : false;

	const handleClick = (item) => {
		isProductAdded() ? removeFromCart(item) : addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{isProductAdded() ? <img src={added_to_cart} alt="" /> : <img src={add_cart} alt="" />}
				</figure> :
				
			</div>
		</div>
	);
}

export { ProductItem };