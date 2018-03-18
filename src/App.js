import React, { Component } from 'react'
import SignIn from './SignIn'
import Login from './Login'
import Account from './Account'
import './App.css'

const $ = window.$

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data1: []
    }
    this.fetchData1 = this.fetchData1.bind(this)
  }

  componentWillMount() {
    this.fetchData1()
  }

  componentDidMount() {
    $('.carousel.carousel-slider').carousel({ fullWidth: true })
    $('.modal').modal()
  }

  CarouselFunction() {
      
  }

  fetchData1() {
    /*fetch('myroute', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(json => {
      this.setState({ data1: json })
    })*/

    /* TEST Fetch*/
    const json = [
      { value: '0', title: 'First Panel', label: 'This is your first panel' },
      { value: '1', title: 'Second Panel', label: 'This is your second panel' },
      { value: '2', title: 'Third Panel', label: 'This is your third panel' },
      { value: '3', title: 'Fourth Panel', label: 'This is your fourth panel' }
    ]
    this.setState({ data1: json })
    console.log(json)
  }

  electGame(props) {
    console.log(this.state.data1)
    const numbers = props.numbers
    const element = numbers.map((o) =>
      <div href={o.value} className='carousel-item blue-grey darken-4 light-green-text-text'>
        <h2>{o.title}</h2>
        <p className='white-text'>{o.label}</p>
      </div>
    )
    return {element}
  }

  render() {
    console.log(this.state.data1)


    return (
      <div>
        <SignIn/>
        <Login/>



        <nav>
          <div className='nav-wrapper blue-grey'>
            <a href='' className='brand-logo margin-left-30'>ShareYourGames</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <a className='waves-light btn-flat text-white modal-trigger blue-grey' href='#Modal_Register'>Register</a>
              <a className='waves-light btn-flat modal-trigger text-white blue-grey' href='#Modal_Login'>Login</a>
            </ul>
          </div>
        </nav>




        <div className='carousel carousel-slider center' data-indicators='true'>
          <div className='carousel-fixed-item center'>
            <a className='btn waves-light blue-grey text-white'>button</a>
          </div>
          <selectGame numbers={this.state.data1}/>
        </div>




        <div className='carousel carousel-slider center' data-indicators='true'>
          <div className='carousel-fixed-item center'>
            <a className='btn waves-light blue-grey text-white'>button</a>
          </div>
          <div className='carousel-item blue-grey darken-4 light-green-text accent-3'>
            <h2>First Panel</h2>
            <p className='white-text'>This is your first panel</p>
          </div>
          <div className='carousel-item blue-grey darken-4 light-green-text-text'>
            <h2>Second Panel</h2>
            <p className='white-text'>This is your second panel</p>
          </div>
          <div className='carousel-item blue-grey darken-4 light-green-text-text'>
            <h2>Third Panel</h2>
            <p className='white-text'>This is your third panel</p>
          </div>
          <div className='carousel-item blue-grey darken-4 light-green-text-text'>
            <h2>Fourth Panel</h2>
            <p className='white-text'>This is your fourth panel</p>
          </div>
        </div>
        <div className='col s12 m7'>
          <h2 className='header'>Horizontal Card</h2>
          <div className='card horizontal'>
            <div className='card-image'>
              <img src='https://avatars0.githubusercontent.com/u/22610971?s=460&v=4' className='img-responsive'/>
            </div>
            <div className='card-stacked'>
              <div className='card-content'>
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div className='card-action'>
                <a href='#'>This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer className='page-footer'>
            <div className='container'>
              <div className='row'>
                <div className='col l6 s12'>
                  <h5 className='white-text'>Footer Content</h5>
                  <p className='grey-text text-lighten-4'>You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className='col l4 offset-l2 s12'>
                  <h5 className='white-text'>Links</h5>
                  <ul>
                    <li><a className='grey-text text-lighten-3' href='#!'>Link 1</a></li>
                    <li><a className='grey-text text-lighten-3' href='#!'>Link 2</a></li>
                    <li><a className='grey-text text-lighten-3' href='#!'>Link 3</a></li>
                    <li><a className='grey-text text-lighten-3' href='#!'>Link 4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='footer-copyright'>
              <div className='container'>
                © 2017 Copyright ShareYourGames
            <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App