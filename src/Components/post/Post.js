import React from 'react';
import {withRouter} from 'react-router-dom'

function Post() {
  return (
    <div className='post-container'>
        <p>date</p>
        <p>post body</p>
        <img/>
    </div>
  );
}

export default withRouter(Post);
