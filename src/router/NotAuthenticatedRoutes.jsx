import { Navigate } from 'react-router-dom';

import PublicLayout from '@/components/Layout/PublicLayout';
import Viewer from '@/pages/Viewer';

const notAuthenticatedRoutes = [
	{
		path: '/',
		element: <PublicLayout />,
		children: [
			{
				path: '/',
				element: <Viewer />,
			},
			{
				path: '/viewer',
				element: <Viewer />,
			},
			{
				path: '*',
				element: <Navigate to='/viewer' />,
			},
			{
				path: '',
				element: <Navigate to='/viewer' />,
			},
		],
	},
];
export default notAuthenticatedRoutes;
