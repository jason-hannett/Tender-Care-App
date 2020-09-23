import React from 'react';
import {withRouter} from 'react-router-dom'
import './account.css'

function Profile(props) {
  return (
    <div className='account-container'>
        <div className='account-name-container'>
          {/* get name off props */}
          <p>Hello, name</p>
        </div>
        <div className='account-kids-container'>
          {/* get kids off props */}
          kids
        </div>
        <div className='account-bills-container'>
          {/* get amount off props */}
            <p>Amount Due: $</p>
            <button>Pay</button>
        </div>
    </div>
  );
}

export default withRouter(Profile);
