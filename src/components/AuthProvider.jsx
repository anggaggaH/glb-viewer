import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AuthProvider({ children }) {
	const dispatch = useDispatch();
	const key = useSelector((state) => state.auth.key);
	const user = useSelector((state) => state.auth.user);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	useEffect(() => {
		if (!isAuthenticated && key && user) {
			dispatch({ type: 'auth/setAuthenticated' });
		}
	});

	return children;
}
