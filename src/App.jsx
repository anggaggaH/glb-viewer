/* eslint-disable no-unused-vars */
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import Router from './router/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const dispatch = useDispatch();
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
		queryCache: new QueryCache({
			onError: (error) => {
				if (error.response?.status === 401) {
					dispatch({ type: 'auth/setLogout' });
					dispatch({ type: 'cart/resetItems' });
					dispatch({ type: 'content/resetOutlet', payload: false });
					dispatch({ type: 'content/resetFetchAPI', payload: false });
				}
				if (error.message === "Network Error" || error.code === 'ERR_NETWORK') {
					// TODO: change base url
				}
			},
		}),
	});
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<CircularProgress />}>
				<ToastContainer position='bottom-right' autoClose={2000} newestOnTop={false} closeOnClick />
				<Router />
			</Suspense>
		</QueryClientProvider>
	);
}

export default App;
