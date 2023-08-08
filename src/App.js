import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';

const queryClient = new QueryClient();

export default function App() {
	return (
		<>
			<NavBar />
			<QueryClientProvider client={queryClient}>
				<Outlet />
			</QueryClientProvider>
		</>
	);
}
