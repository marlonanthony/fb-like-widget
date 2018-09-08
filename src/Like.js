import React, { Component } from 'react'
import LikeIcon from './LikeIcon'

export default class Like extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  toggleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked 
    }))
  }

  render() {
    return (
      <div>
        { this.state.liked && <LikeIcon /> }
        <hr/>
        <div>
          <button 
            type='button'
            className='btn no-outline btn-primary mb-3 ml-4'
            onClick={ this.toggleLike }
          >
            <i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden='true' />
            <span className="align-middle">Like</span>
          </button>
        </div>
      </div>
    )
  }
}
