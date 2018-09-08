import React, { Component } from 'react';
import Comment from './Comment'
import Like from './Like'

class Status extends Component {
  render() {
    return (
      <div className="col-8 offset-2">
        <div className="card">
          <div className="card-block">
            <div className="row">
            <div className='col-2'>
            </div>
              <div className="col-6 profile-row">
                <div className="row">
                  <img 
                    src="https://github.com/marlonanthony/portfolio/blob/master/images/profile.png?raw=true" 
                    alt="profile-pic" 
                    style={{ width: '60px', height: '60px', padding: '5px'}}
                  />
                  <a href="#">The Zen of Programming</a>
                </div>
                <div className="row">
                  <small className="post-time">10 mins</small>
                </div>
              </div>
            </div>
            <Like />
          </div>
          <div className="card-footer text-muted">
            <Comment maxLetters={280} />
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
