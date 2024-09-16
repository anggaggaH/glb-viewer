import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
	const location = useLocation();
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (!window.location.href.includes('localhost')) {
			if (import.meta.env.VITE_MODE === 'production') {
				ReactGA.initialize('G-T0MYZZ47FR');
				setInitialized(true);
			}
		}
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.send(location.pathname + location.search);
		}
	}, [initialized, location]);
};

export default usePageTracking;
