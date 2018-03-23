import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory
} from 'react-router-dom'
import App from '../app/App'
import Account from '../account/Account'

const ShareYourGame = () => (
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/account' component={Account} />
        </div>
    </Router>
)

export default ShareYourGame