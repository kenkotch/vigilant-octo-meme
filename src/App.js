import React, { Component } from 'react';
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

  async componentDidMount() {
    const res = await fetch('http://localhost:8181/hoard')
    const json = await res.json()
    this.setState({
      ...this.state,
      items: json
    })
    this.setState({
      ...this.state,
      items: json
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">All your routes are belong to me.</h1>
        <HoardList items={ this.state.items }/>
      </div>
    );
  }
}

export default App;

/***
import React, { Component } from 'react'
import './App.css'
import HoardingList from './HoardingList'
import ItemDetails from './ItemDetails'
import HoardOrModifyItem from './HoardOrModifyItem'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentItem: -1,
      items: []
    }

    this.blankItem = {
      name: '',
      description: '',
      imgUrl: ''
    }
  }

  barcodeString = () => Math.random().toString(36).substr(2).toUpperCase()

  async componentDidMount() {
    console.log(`>>> GET ${process.env.REACT_APP_API_URL}/hoarding`)
    const res = await fetch(`${process.env.REACT_APP_API_URL}/hoarding`)
    const json = await res.json()
    this.setState({
      ...this.state,
      items: json
    })
  }

  deleteItem = async (e, id) => {
    e.preventDefault()
    const dbId = this.state.items[id].id
    await fetch(`${process.env.REACT_APP_API_URL}/hoarding/${dbId}`, {method: 'DELETE'})
    const getRes = await fetch(`${process.env.REACT_APP_API_URL}/hoarding`)
    const items = await getRes.json()
    this.setState({
      ...this.state,
      items: items,
      currentItem: -1
    })
  }

  addItem = async (partialItem) => {
    const item = {
      ...partialItem,
      barcode: this.barcodeString()
    }
    const url = `${process.env.REACT_APP_API_URL}/hoarding`
    const opts = {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    await fetch(url, opts)
    const getRes = await fetch(`${process.env.REACT_APP_API_URL}/hoarding`)
    const items = await getRes.json()
    this.setState({
      ...this.state,
      items: items,
      currentItem: -1
    })
  }

  showDetails = (e, id) => {
    e.preventDefault()
    this.setState({
      items: [...this.state.items],
      currentItem: id
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tech Hoarder</h1>
        </header>
        <HoardingList showDetails={ this.showDetails } deleteItem={ this.deleteItem } items = { this.state.items }/>
        <div className='below-list'>
          <ItemDetails item={ this.state.currentItem === -1 ? { id: -1 } : this.state.items[this.state.currentItem] }/>
          <h2>Go ahead, hoard something...</h2>
          <HoardOrModifyItem item={ this.blankItem } addItem={ this.addItem }/>
        </div>
      </div>
    )
  }
}

export default App
***/
