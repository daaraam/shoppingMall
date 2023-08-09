import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import { useAuthContext } from './Context/AuthContext';
import Button from './Ui/Button';
import User from './User';

export default function NavBar() {
	const { user, login, logout } = useAuthContext();
	return (
		<header className="flex justify-between items-center font-['Makgeolli'] border-b border-pink-300">
			<Link to="/" className="flex items-center">
				<img src={logo} alt="logo" />
				<h1 className="text-3xl">DARAM's STORE</h1>
			</Link>
			<nav className="flex items-center gap-5 text-2xl">
				<Link to="/products">Products</Link>

				{user && <Link to="/carts">Carts</Link>}
				{user && user.isAdmin && (
					<Link to="products/new">
						<FaPenNib />
					</Link>
				)}
				{user && <User user={user} />}
				{!user && <Button text={'Login'} onClick={login} />}
				{user && <Button text={'Logout'} onClick={logout} />}
			</nav>
		</header>
	);
}
