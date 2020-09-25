import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setPrimaryInfo} from '../../redux/primaryInfo'
import ParentInfo from './ParentInfo'
import axios from 'axios'
import './account.css'


function Profile(props) {

  const [allParent, setAllParent] = useState([]);
  // console.log(props)

  const getAllParent = () => {
    axios.get('/api/get-all-parent')
    .then(response => setAllParent(response.data))
  }

  useEffect(() => {getAllParent()})

  // console.log(allParent)

  const parentInfo = allParent.map((element, index) => {
    return <ParentInfo key={index} info={element}/>
  })
  return (
    <div className='account-container'>
        <div className='account-name-container'>
          {/* get name off props */}
          <p>Hello, {props.user.email}</p>
        </div>
        <div className='account-kids-container'>
          {/* get kids off props */}
          parent info
        </div>
          {parentInfo}
        <div className='account-bills-container'>
          {/* get amount off props */}
            <p>Amount Due: $</p>
            <button>Pay</button>
        </div>
    </div>
  );
}

const mapStateToProps = reduxState => {

  return {
    user: reduxState.reducer,
    primary: reduxState.primaryInfo
  }
}

export default connect(mapStateToProps, {setPrimaryInfo})(withRouter(Profile));
