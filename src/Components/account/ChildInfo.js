import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';
import './childinfo.css'

function ChildInfo(props) {

  const deleteChild = () => {
      const {child_id} = props.child
      axios.delete(`/api/delete-child/${child_id}`)
      .then(response => props.getAllChild())
  }
  console.log()
  return (
    <div className='parent-info-container'>
        <div className='child-info-container'>
          <div className='child-info-subheader'>
            <h2>Child Info</h2>
            <button onClick={deleteChild}>remove</button>
          </div>
            <p>Name: {props.child.childfirst} {props.child.childlast}</p>
            <p>Age: {props.child.childage}</p> 
        </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
    
  return {
      user: reduxState.reducer,
      primary: reduxState.primaryInfo
  }};


  export default connect(mapStateToProps)(withRouter(ChildInfo))