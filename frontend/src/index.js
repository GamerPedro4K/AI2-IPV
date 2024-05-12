import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesPage from './router/routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@csstools/normalize.css';
import './index.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

import { PrimeReactProvider } from 'primereact/api';
library.add(fas, fab, far)
export { library };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PrimeReactProvider><RoutesPage /></PrimeReactProvider>);

