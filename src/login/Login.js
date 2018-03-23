import React, { Component } from 'react'
import './Login.css'
//import { withRouter } from "react-router-dom"
import {
    withRouter,
    Link
  } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state= {
            MAIL: '',
            MDP: ''
        }
        this.connectToken = this.connectToken.bind(this)
    }
/*
    connectToken() {
        fetch('http://web/api/utilisateur', {
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
            alert('ERREUR')
            //throw new Error(res.status)
            this.props.history.push('/')
        })
        .then(json => {
            if (json) {
            //localStorage.setItem('TOKEN', json.token)
            localStorage.setItem('USER', json.MAIL)
            localStorage.setItem('PASSWORD', json.MDP)  //getItem
            this.props.history.push('/account')
            }
        })
    }
*/
    connectToken() {
        if (this.state.MAIL == 'jeremy@gmail.com' && this.state.MDP == 'jeremy') {
            const json1 = {
                //token: 'eyJleHAiOjE1MjExNDUxNDY3NDUsImxvZ2luIjoiamJvaXNkcm9uIiwiY29ubmVjdGlvbiI6IjIwMTgtMDMtMTUgMDk6MTk6MDYiLCJsaWNlbnNlIjpbIlNJRyIsIlNJQURNIiwiU0lQIiwiU0lFUyIsIlNJSCIsIlNJUSJdfQ',
                MAIL: 'jeremy@gmail.com',
                MDP: 'jeremy'
            }
            //localStorage.setItem('TOKEN', json.token)
            localStorage.setItem('MAIL', json1.MAIL)
            localStorage.setItem('MDP', json1.MDP)  //getItem
            this.props.history.push('/account/jeremy')
        }
        if (this.state.MAIL === 'pierre@gmail.com' && this.state.MDP === 'pierre') {
            const json = {
                //token: 'eyJleHAiOjE1MjExNDUxNDY3NDUsImxvZ2luIjoiamJvaXNkcm9uIiwiY29ubmVjdGlvbiI6IjIwMTgtMDMtMTUgMDk6MTk6MDYiLCJsaWNlbnNlIjpbIlNJRyIsIlNJQURNIiwiU0lQIiwiU0lFUyIsIlNJSCIsIlNJUSJdfQ',
                MAIL: 'pierre@gmail.com',
                MDP: 'pierre'
            }
            //localStorage.setItem('TOKEN', json.token)
            localStorage.setItem('MAIL', json.MAIL)
            localStorage.setItem('MDP', json.MDP)  //getItem
            this.props.history.push('/account/pierre')
        }
        if (this.state.MAIL !== 'jeremy@gmail.com' && this.state.MAIL !== 'pierre@gmail.com') {
            return alert('Error Username or Password')
        }
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
                                <div className='input-field col s12'>
                                    <input id='email_login' type='email' className='validate' value={this.state.MAIL} onChange={(e) => this.onChange('MAIL', e)}/>
                                    <label htmlFor='email_login'>Email</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field label col s6'>
                                    <input id='password_login' type='password' className='validate' value={this.state.MDP} onChange={(e) => this.onChange('MDP', e)}/>
                                    <label htmlFor='password_login'>Password</label>
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

export default withRouter(Login)