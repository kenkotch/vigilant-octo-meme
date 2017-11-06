import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HoardList from './components/HoardList'

const fakeItems = [
  {
    id: 2,
    name: 'Cobra computer',
    description: 'In communist Romania, electrons were illegal.',
    barcode: 'F742MCBEKCG',
    img_url: 'http://www.old-computers.com/museum/photos/Felix_HC85_System_1.jpg'
  },
  {
    id: 1,
    name: 'Fender Blondie',
    description: 'Really loud',
    barcode: 'XRA0K3QXBH',
    img_url: 'http://www.astrings.co.uk/images/product/a/amps-electric-valve-fender-vintage-reissue-%E2%80%9965-deluxe-blondi-320px-320px.png'
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: fakeItems
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">All your routes are belong to me.</h1>
        <HoardList />
      </div>
    );
  }
}

export default App;
