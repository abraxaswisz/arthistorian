import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Components/Router"


ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
