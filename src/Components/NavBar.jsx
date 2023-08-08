import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { login } from '../API/firebase';
import logo from '../image/logo.png';

export default function NavBar() {
	return (
		<header className="flex justify-between items-center  font-['Makgeolli'] border-b border-pink-300">
			<Link to="/" className="flex items-center">
				<img src={logo} alt="logo" />
				<h1 className="text-3xl">DARAM's STORE</h1>
			</Link>
			<nav className="flex gap-5 text-2xl">
				<Link to="/products">Products</Link>
				<Link to="/carts">Carts</Link>
				<Link to="products/new">
					<FaPenNib />
				</Link>
				<button onClick={login}>Login</button>
			</nav>
		</header>
	);
}
