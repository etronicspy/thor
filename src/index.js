import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {articles} from './fixtures';

ReactDOM.render(<App article={articles[0]}/>, document.getElementById('root'));
registerServiceWorker();
