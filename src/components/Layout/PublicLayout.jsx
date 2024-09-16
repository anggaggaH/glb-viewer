import { Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import usePageTracking from '../../hooks/usePageTracking';

function PublicLayout() {
	usePageTracking()

	const dispatch = useDispatch();
	const observedElementRef = useRef(null);

	const html = (
		<StyledEngineProvider injectFirst>
			<Outlet />
		</StyledEngineProvider>
	);

	const onResize = useCallback(() => {
		if (observedElementRef.current) dispatch({ type: 'content/setInner', payload: window.innerHeight });
	}, [dispatch]);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		onResize();
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, [onResize]);

	return (
		<div ref={observedElementRef} className='w-full h-full'>
			{html}
		</div>
	);
}

export default PublicLayout;
