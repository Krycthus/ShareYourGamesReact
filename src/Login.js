import React, { Component } from 'react'
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state= {
            username: '',
            password: ''
        }
        this.connectToken = this.connectToken.bind(this)
    }

    connectToken() {
        /*fetch('http://routeàdéfinir', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } 
            alert('ERREUr')
            throw new Error(res.status)
        })
        .then(json => {
            localStorage.setItem('TOKEN', json.token)
        })*/


        if (this.state.username === 'jeremy' && this.state.password === 'jeremy') {
            const json = {
                token: 'eyJleHAiOjE1MjExNDUxNDY3NDUsImxvZ2luIjoiamJvaXNkcm9uIiwiY29ubmVjdGlvbiI6IjIwMTgtMDMtMTUgMDk6MTk6MDYiLCJsaWNlbnNlIjpbIlNJRyIsIlNJQURNIiwiU0lQIiwiU0lFUyIsIlNJSCIsIlNJUSJdfQ'
            }
            localStorage.setItem('TOKEN', json.token)
        }
        else {alert('Erreur')}
    }

    onChange(k, e) {
        const test = {}
        test[k] = e.target.value
        this.setState(test)
    }

    render() {
        return (
            <div id='Modal_Login' className='modal'>
                <div className='modal-content nav-wrapper'>
                    <div className='row'>
                        <form className='col s12'>
                            <div className='row'>
                                <div className='input-field label col s6'>
                                    <input id='username' type='text' className='validate' value={this.state.username} onChange={(e) => this.onChange('username', e)}/>
                                    <label for='username'>Username</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field label col s6'>
                                    <input id='password' type='password' className='validate' value={this.state.password} onChange={(e) => this.onChange('password', e)}/>
                                    <label for='password'>Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='modal-footer nav-wrapper'>
                        <a href='#!' className='modal-action modal-close waves-effect waves-green btn' onClick={this.connectToken}>Connexion</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login