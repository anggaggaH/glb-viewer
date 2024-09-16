import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import notAuthenticatedRoutes from './NotAuthenticatedRoutes';

export default function Router() {
	const routesForNotAuthenticated = notAuthenticatedRoutes;

	const r = routesForNotAuthenticated

	const router = createBrowserRouter([...r]);

	return <RouterProvider router={router} />;
}
