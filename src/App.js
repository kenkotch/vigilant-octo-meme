import React, { Component } from 'react';
import './App.css';
import HoardList from './components/HoardList'
import HoardForm from './components/HoardForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: -1
    }

    this.blankItem = {
      name: '',
      description: '',
      imgUrl: ''
    }
  }

  async componentDidMount() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/hoard`)
    const json = await res.json()
    this.setState({
      ...this.state,
      items: json
    })
  }

  addItem = async (item) => {
    const url = `${process.env.REACT_APP_API_URL}/hoard`
    const opts = {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    await fetch(url, opts)
    const getRes = await fetch(`${process.env.REACT_APP_API_URL}/hoard`)
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
        <h1 className="App-title">All your routes are belong to me.</h1>
        <HoardList items={ this.state.items }/>
        <HoardForm item={ this.blankItem } addItem={ this.addItem }/>
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
