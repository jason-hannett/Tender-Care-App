import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import './home.css'

function Home() {

  const [post] = useState(undefined)

  return (
    <div className='home-container'>
        <div className='home-post-container'>
          <input placeholder="What's new?"/>
          <button>Post</button>
        </div>
        <div className='home-feed-container'>
        </div>
    </div>
  );
}

export default withRouter(Home);
