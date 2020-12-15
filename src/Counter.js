import React from 'react'

class Counter extends React.Component {

  state = {
    count: 0
  }

  render () {
    return (
      <div>
        Count: { this.state.count }
        <button id="add" onClick={() => this.setState({count: this.state.count + 1})}>Add</button>
      </div>
    )
  }
}

export default Counter