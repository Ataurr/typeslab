import React from 'react'
import FluxComponent from 'flummox/component'
import './frame.scss!post-css'

import Controls from './controls.jsx!'
import Output from './output.jsx!'

export default class Frame extends React.Component {
  render() {
    return <div className="Frame">
      <header><h1 className="Frame-Logo"><span>Type</span><span>Slab</span></h1></header>
      <Controls></Controls>
      <FluxComponent connectToStores='messages'>
        <Output width={500}></Output>
      </FluxComponent>
    </div>
  }
}