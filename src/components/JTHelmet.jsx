import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

export default function JTHelmet({ description = 'Jungle Toppings', content = 'Jungle Toppings' }) {
	const jtTitle = import.meta.env.VITE_TITLE_APP;
	const selectedOutlet = useSelector((state) => state.auth.selectedOutlet);

	let contentTitle = `${selectedOutlet?.name || 'APP'} | ${jtTitle}`;

	return (
		<HelmetProvider>
			<Helmet>
				<title>{contentTitle}</title>
				<meta name={description} content={content} />
			</Helmet>
		</HelmetProvider>
	);
}
