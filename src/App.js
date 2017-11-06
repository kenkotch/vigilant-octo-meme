import React, { Component } from 'react';
import './App.css';
import HoardList from './components/HoardList'
import HoardForm from './components/HoardForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
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

  addItem = (item) => {
    console.log(item);
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
