import React from 'react';
import '@styles/OrderItem.scss';

import caja from '@extras/caja.png';
import close from '@icons/icon_close.png';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={caja} alt="cajita" />
			</figure>
			<p>Box</p>
			<p>$30,00</p>
			<img src={close} alt="close" />
		</div>
	);
}

export { OrderItem };