import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setPrimaryInfo} from '../../redux/primaryInfo'
import ParentInfo from './ParentInfo'
import ChildInfo from './ChildInfo'
import UserBilling from './UserBilling'
import axios from 'axios'
import './account.css'


function Profile(props) {

  const [allParent, setAllParent] = useState([]);
  const [allChild, setAllChild] = useState([]);
  const [allUserBills, setAllUserBills] = useState([]);
  const [amountDue, setAmountDue] = useState(0);
  // console.log(props)

  const getAllParent = () => {
    axios.get('/api/get-all-parent')
    .then(response => setAllParent(response.data))
  }

  const getAllChild = () => {
    axios.get('/api/get-all-child')
    .then(response => setAllChild(response.data))
  }

  const getAllUserBills = () => {
    axios.get('/api/get-user-bills')
    .then(response => setAllUserBills(response.data))
  }

  useEffect(() => {
    getAllParent()
    getAllChild()
    getAllUserBills()
  }, [])

  // console.log(allParent)

  const parentInfo = allParent.map((element, index) => {
    return <ParentInfo key={index} info={element}/>
  })
  const childInfo = allChild.map((element, index) => {
    return <ChildInfo key={index} child={element} getAllChild={getAllChild}/>
  })
  const userBilling = allUserBills.map((element, index) => {
    return <UserBilling key={index} bill={element} getAllUserBills={getAllUserBills}/>
  })

  return (
    <div className='account-container'>
        <div className='account-name-container'>
          {/* get name off props */}
          <p>Hello, {props.user.email}</p>
        </div>
        <div className='account-info-container'>
          parent info
        </div>
        <div className='account-parent-info'>
          {parentInfo}
        </div>
          <div className='child-info-header'>
            <p>child info</p>
            <button onClick={() => props.history.push('/info/add-child')}>add child</button>
          </div>
        <div className='account-parent-info'>
            {childInfo}
        </div>
        <div className='account-info-container'>
          billing info
        </div>
        <div className='account-billing-info'>
            {userBilling}
        </div>
        <div className='account-bills-container'>
          {/* get amount off props */}
            <p>Amount Due: ${amountDue}</p>
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
