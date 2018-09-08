import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Status from './Status';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Status />, document.getElementById('root'));
registerServiceWorker();
