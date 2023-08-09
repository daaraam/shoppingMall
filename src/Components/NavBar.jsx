import React, { useEffect, useState } from 'react';
import { FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { login, logout, userStateChange } from '../API/firebase';
import logo from '../image/logo.png';
import User from './User';

export default function NavBar() {
	const [user, setUser] = useState();

	useEffect(() => {
		userStateChange(setUser);
		console.log(user);
	}, []);

	return (
		<header className="flex justify-between items-center font-['Makgeolli'] border-b border-pink-300">
			<Link to="/" className="flex items-center">
				<img src={logo} alt="logo" />
				<h1 className="text-3xl">DARAM's STORE</h1>
			</Link>
			<nav className="flex items-center gap-5 text-2xl">
				<Link to="/products">Products</Link>
				<Link to="/carts">Carts</Link>
				<Link to="products/new">
					<FaPenNib />
				</Link>
				{user && <User user={user} />}
				{!user && <button onClick={login}>Login</button>}
				{user && <button onClick={logout}>Logout</button>}
			</nav>
		</header>
	);
}
