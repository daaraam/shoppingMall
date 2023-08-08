import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AllProducts from './Pages/AllProducts.jsx';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import MyCart from './Pages/MyCart';
import NewProducts from './Pages/NewProducts';
import ProductDetail from './Pages/ProductDetail';
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, path: '/', element: <Home /> },
			{ path: '/carts', element: <MyCart /> },
			{ path: '/products', element: <AllProducts /> },
			{ path: '/products/new', element: <NewProducts /> },
			{ path: '/products/:id', element: <ProductDetail /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

reportWebVitals();
