import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div id="Modal_Login" className="modal modal-fixed-footer">
                <div className="modal-content nav-wrapper">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field label col s6">
                                    <input id="username" type="text" className="validate"/>
                                    <label for="username">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field label col s6">
                                    <input id="password" type="password" className="validate"/>
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login