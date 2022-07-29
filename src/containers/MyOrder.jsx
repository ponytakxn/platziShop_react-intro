import React, { useContext } from 'react';
import {OrderItem} from '@components/OrderItem';
import '@styles/MyOrder.scss';
import AppContext from '@context/AppContext';

import arrow from '@icons/flechita.svg';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	const handleClose = () => setToggleOrders(!toggleOrders);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img 
					src={arrow} 
					alt="arrow"
					onClick={handleClose}
				/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className='item-content'>
					{state.cart.map(item => (
						<OrderItem product={item} key={`orderItem-${item.id}`}/>
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export { MyOrder };