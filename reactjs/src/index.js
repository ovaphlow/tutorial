import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// React工程从这里开始运行
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
