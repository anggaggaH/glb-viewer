import { Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import AuthProvider from '@/components/AuthProvider';
import Layout from '@/components/Layout/Layout';
import NotFound from '@/pages/NotFound';
import Viewer from '@/pages/Viewer';

const authenticatedRoutes = [
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<AuthProvider>
					<Layout />
				</AuthProvider>
			</ProtectedRoute>
		),
		children: [
			{
				path: '/viewer',
				element: <Navigate to='/' />,
			},
			{
				path: '',
				element: <Viewer />,
			},

			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
];

export default authenticatedRoutes;
