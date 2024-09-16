import { useCallback, useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import JTHelmet from '../JTHelmet';
import { getDiscounts, getOutlet, getPaymentTypes, getServingTimes } from '@/store/slices/contentSlice';
import { getCustomer } from '@/store/slices/authSlice';
import usePageTracking from '../../hooks/usePageTracking';

export default function Layout() {
	usePageTracking();

	const dispatch = useDispatch();
	const observedElementRef = useRef(null);
	const reFetch = useRef(null);

	const client = useSelector((state) => state.auth.user?.client?.id);
	const selectedOutlet = useSelector((state) => state.auth.selectedOutlet);
	const paymentTypes = useSelector((state) => state.content.paymentTypes);
	const servingTimes = useSelector((state) => state.content.servingTimes);
	const discounts = useSelector((state) => state.content.discounts);
	const outlet = useSelector((state) => state.content.outlet);
	const selectedCustomer = useSelector((state) => state.auth.selectedCustomer);

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

	useEffect(() => {
		if (selectedOutlet && !outlet) {
			dispatch(getOutlet(selectedOutlet.id));
		}
	}, [selectedOutlet, outlet, dispatch]);

	useEffect(() => {
		if (selectedOutlet && !paymentTypes) {
			dispatch(getPaymentTypes({ client, max_size: true, ordering: 'id' }));
		}
	}, [selectedOutlet, paymentTypes, client, dispatch]);

	useEffect(() => {
		if (selectedOutlet && !servingTimes) {
			dispatch(getServingTimes({ client, max_size: true }));
		}
	}, [selectedOutlet, servingTimes, client, dispatch]);

	useEffect(() => {
		if (selectedOutlet && !discounts) {
			dispatch(getDiscounts({ outlet: selectedOutlet.id, max_size: true }));
		}
	}, [selectedOutlet, discounts, client, dispatch]);

	useEffect(() => {
		if (selectedCustomer && !reFetch.current) {
			reFetch.current = true;
			dispatch(getCustomer({ params: {}, id: selectedCustomer.id }));
		}
	});

	return (
		<>
			<JTHelmet />
			<div ref={observedElementRef} className='layout'>
				<Outlet />
			</div>
		</>
	);
}
