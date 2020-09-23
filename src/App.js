import React from 'react';
import {withRouter} from 'react-router-dom'
import routes from './routes';
import Nav from './Components/nav/Nav'

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/auth' || props.location.pathname === '/register'
      ?(<>{routes}</>)
      : (
        <>
          <Nav/>
          {routes}
        </>
        )}
    </div>
  );
}

export default withRouter(App);
