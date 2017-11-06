import React from 'react'

const HoardListItem = ({ item }) => (
  <li>
    <span className='item-name'>{ item.name }</span>
    <span className='item-description'>{ item.description }</span>
  </li>
)

export default HoardListItem
