import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store, { persistor } from './store';

import { fallbackErrorRender } from './components/ErrorBoundary/ErrorBoundary';

import './assets/css/app-style.scss';
import './assets/css/tailwind.css';
import './index.css';
import 'swiper/css';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<ErrorBoundary fallbackRender={fallbackErrorRender}>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				{/* <React.StrictMode> */}
				<App />
				{/* </React.StrictMode> */}
			</PersistGate>
		</Provider>
	</ErrorBoundary>
);
