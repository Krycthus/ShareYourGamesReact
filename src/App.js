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
      { value: '0', title: 'Firstprout Game', label: 'This is your first Game' },
      { value: '1', title: 'Second Game', label: 'This is your second Game' },
      { value: '2', title: 'Third Game', label: 'This is your third Game' },
      { value: '3', title: 'Fourth Game', label: 'This is your fourth Game' }
    ]
    this.setState({ data1: json })
  }

  render() {
    const games = this.state.data1
    console.log(games)
    const gameList = games.map(o => {
      return (
        <div className='carousel-item blue-grey darken-4 light-green-text accent-3'>
          <div className="card-content">
            <div className='row'>
              <div className='col s3 offset-s3'>
                <img src='https://avatars0.githubusercontent.com/u/22610971?s=460&v=4' className='images_petit'/>
              </div>
              <div className='col s3'>
                <h2>{o.title}</h2>
                <p className='white-text'>{o.label}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })

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




        <div className='carousel carousel-slider center height-button' data-indicators='true'>
          <div className='carousel-fixed-item center'>
            <a className="waves-effect waves-light btn blue-grey">PLAY</a>
          </div>
          {gameList}
        </div>




        <div className='carousel carousel-slider center' data-indicators='true'>
          <ul className='collapsible popout' data-collapsible='expandable'>
            <li>
              <div className='collapsible-header'><i className='material-icons'>filter_drama</i>First</div>
              <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
              <div className='collapsible-header'><i className='material-icons'>place</i>Second</div>
              <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
              <div className='collapsible-header'><i className='material-icons'>whatshot</i>Third</div>
              <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
          </ul>
        </div>





        




        <div className='col s12 m7'>
          <h2 className='header'>Horizontal Card</h2>
          <div className='card horizontal'>
            <div className="card horizontal">
              <div className="card-image">
                <img src='https://avatars0.githubusercontent.com/u/22610971?s=460&v=4' className='img-responsive images_petit'/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h2>First Game</h2>
                </div>
                <div className="card-content">
                  <p className='white-text'>This is your first Game</p>
                </div>
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