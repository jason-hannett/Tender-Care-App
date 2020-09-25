import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';
import './parentinfo.css'

function ParentInfo(props) {

  console.log()
  return (
    <div className='parent-info-container'>
        <div className='primary-info-container'>
          <h2>Primary Contact</h2>
            <p>Name: {props.info.first} {props.info.last}</p>
            <p>Phone: {props.info.phone}</p>
            <p>Relation: {props.info.relation}</p>
        </div>
        <div className='secondary-info-container'>
          <h2>Secondary Contact</h2>
            <p>Name: {props.info.secondaryfirst} {props.info.secondarylast}</p>
            <p>Phone: {props.info.secondaryphone}</p>
            <p>Relation: {props.info.secondaryrelation}</p>
        </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
    
  return {
      user: reduxState.reducer,
      primary: reduxState.primaryInfo
  }};


  export default connect(mapStateToProps)(withRouter(ParentInfo))