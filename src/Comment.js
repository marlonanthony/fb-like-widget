import React, { Component } from 'react'

export default class Comment extends Component {
  state = { characterCount: 0 }

  handleChange = (e) => {
    this.setState({
      characterCount: e.target.value.length 
    })
  }

  render() {
    return (
      <div>
        <textarea 
          className='form-control' 
          placeholder='Write a comment...' 
          onChange={this.handleChange}
        />
        <small>{this.props.maxLetters - this.state.characterCount} Remaining</small>
      </div>
    )
  }
}
