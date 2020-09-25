import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';
import './userbilling.css'

function UserBilling(props) {


  console.log()
  return (
    <div className='parent-info-container'>
        <p>Date {props.bill.billdate}</p>
        <p>Amount Due: {props.bill.amount}</p>
    </div>
  );
}

const mapStateToProps = reduxState => {
    
  return {
      user: reduxState.reducer
  }};


  export default connect(mapStateToProps)(withRouter(UserBilling))