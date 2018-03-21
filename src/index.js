import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Route from './route/Route'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Route />, document.getElementById('root'))
registerServiceWorker()
