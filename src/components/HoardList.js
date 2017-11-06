import React from 'react'
import HoardListItem from './HoardListItem'

const HoardList = ({ items }) => (
  <ul>
    { items.map((item, idx) => <HoardListItem key={ idx } item={ item } />) }
  </ul>
)

export default HoardList
