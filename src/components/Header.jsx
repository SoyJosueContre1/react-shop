import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, SetToggle] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		SetToggle(!toggle);
	}
	return (
		<nav>
			<img src={menu} alt="menu" className="Header-menu" />
			<div className="Header-navbar-left">
				<img src={logo} alt="logo" className="Header-nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="Header-navbar-right">
				<ul>
					<li className="Header-navbar-email" onClick={handleToggle} >
						platzi@example.com
					</li>
					<li className="Header-navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
		</nav>
	);
}

export default Header;