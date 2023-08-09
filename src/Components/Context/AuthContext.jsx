import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, userStateChange } from '../../API/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState();

	useEffect(() => {
		userStateChange(user => {
			console.log(user);
			setUser(user);
		});
	}, []);

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}
