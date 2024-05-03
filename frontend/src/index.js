import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas, fab, far)
export { library };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

