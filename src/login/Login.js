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
            username: '',
            password: ''
        }
        this.connectToken = this.connectToken.bind(this)
    }

    connectToken() {
        fetch('http://192.168.1.28/api/utilisateur', {
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




/*
        if (this.state.username === 'jeremy' && this.state.password === 'jeremy') {
            const json = {
                token: 'eyJleHAiOjE1MjExNDUxNDY3NDUsImxvZ2luIjoiamJvaXNkcm9uIiwiY29ubmVjdGlvbiI6IjIwMTgtMDMtMTUgMDk6MTk6MDYiLCJsaWNlbnNlIjpbIlNJRyIsIlNJQURNIiwiU0lQIiwiU0lFUyIsIlNJSCIsIlNJUSJdfQ',
                user: 'jeremy',
                password: 'jeremy'
            }
            localStorage.setItem('TOKEN', json.token)
            localStorage.setItem('USER', json.MAIL)
            localStorage.setItem('PASSWORD', json.MDP)  //getItem
            this.props.history.push('/account')
        }
        else {alert('Error Username or Password')}*/
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
                                    <input id='email_login' type='email' className='validate'/>
                                    <label htmlFor='email_login'>Email</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field label col s6'>
                                    <input id='password_login' type='password' className='validate' value={this.state.password} onChange={(e) => this.onChange('password', e)}/>
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