import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';
// import trash from './296-2961763_trash-icon-png-rubbish-white-bin-transparent-png.png'
import './parentinfo.css'

function ParentInfo(props) {


  
  console.log()
  return (
    <div className='parent-info-container'>
       <p>{props.info.first}</p>
       <p>{props.info.last}</p>
       <p>{props.info.phone}</p>
       <p>{props.info.relation}</p>
       <p>{props.info.secondaryfirst}</p>
       <p>{props.info.secondarylast}</p>
       <p>{props.info.secondaryphone}</p>
       <p>{props.info.secondaryrelation}</p>
       <p>{props.info.childfirst}</p>
       <p>{props.info.childlast}</p>
       <p>{props.info.childage}</p>
    </div>
  );
}

const mapStateToProps = reduxState => {
    
  return {
      user: reduxState.reducer,
      primary: reduxState.primaryInfo
  }};


  export default connect(mapStateToProps)(withRouter(ParentInfo))