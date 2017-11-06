import React, { Component } from 'react'

class HoardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: { ...props.item }
    }

    this.addItem = props.addItem
  }

  descriptionChanged = (e) => {
    e.preventDefault()
    this.setState({
      item: { ...this.state.item, description: e.target.value }
    })
  }

  nameChanged = (e) => {
    e.preventDefault()
    this.setState({
      item: { ...this.state.item, name: e.target.value }
    })
  }

  imgUrlChanged = (e) => {
    e.preventDefault()
    this.setState({
      item: { ...this.state.item, imgUrl: e.target.value }
    })
  }

  sendUpdateToParentAndClear = (e) => {
    e.preventDefault()
    this.setState({
      item: {
        name: '',
        description: '',
        imgUrl: ''
      }
    })
    this.addItem(this.state.item)
  }

  render() {
    return (
      <form onSubmit={ this.sendUpdateToParentAndClear }>
        <div className='tidy-form'>
          <label>Name</label>
          <input type='text' name='item-name' value={ this.state.item.name } onChange={ this.nameChanged } />
        </div>
        <div className='tidy-form'>
          <label>Description</label>
          <input type='text' name='item-description' value={ this.state.item.description } onChange={ this.descriptionChanged }/>
        </div>
        <div className='tidy-form'>
          <label>Image URL</label>
          <input type='text' name='item-image-url' value={ this.state.item.imgUrl } onChange={ this.imgUrlChanged }/>
        </div>
        <input type='submit'/>
      </form>
    )
  }
}

export default HoardForm

/***
import React, { Component } from 'react'

class HoardOrModifyItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {...props.item}
    }
    this.addItem = props.addItem
  }

  descriptionChanged = (e) => {
    e.preventDefault()
    this.setState({
      item: { ...this.state.item, description: e.target.value }
    })
  }

  nameChanged = (e) => {
    e.preventDefault()
    this.setState({
      item: { ...this.state.item, name: e.target.value }
    })
  }

  imageUrlChanged = (e) => {
    e.preventDefault()
    this.setState({
      item: { ...this.state.item, imgUrl: e.target.value }
    })
  }

  sendUpdateToParentAndClear = (e) => {
    e.preventDefault()
    this.setState({
      item: {
        name: '',
        description: '',
        imgUrl: ''
      }
    })
    this.addItem(this.state.item)
  }

  render() {
    return (
      <form onSubmit={ this.sendUpdateToParentAndClear }>
        <div className='tidy-form'>
          <label>Name</label>
          <input type='text' name='item-name' value={ this.state.item.name } onChange={ this.nameChanged } />
        </div>
        <div className='tidy-form'>
          <label>Description</label>
          <input type='text' name='item-description' value={ this.state.item.description } onChange={ this.descriptionChanged }/>
        </div>
        <div className='tidy-form'>
          <label>Image URL</label>
          <input type='text' name='item-image-url' value={ this.state.item.imgUrl } onChange={ this.imageUrlChanged }/>
        </div>
        <input type='submit'/>
      </form>
    )
  }
}

export default HoardOrModifyItem

***/
