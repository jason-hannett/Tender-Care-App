import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUserInfo} from '../../redux/reducer'
import {setPrimaryInfo} from '../../redux/primaryInfo';
import axios from 'axios';
import './info.css'
import teddy from './teddy-bear-flat-vector-800x566.jpg'

function Info(props) {

  const [first, setPf] = useState('');
  const [last, setPl] = useState('');
  const [phone, setPh] = useState(undefined);
  const [relation, setPr] = useState('');

  const [secondaryFirst, setSf] = useState('');
  const [secondaryLast, setSl] = useState('');
  const [secondaryPhone, setSph] = useState(undefined);
  const [secondaryRelation, setSr] = useState('');

  const [childFirst, setCf] = useState('');
  const [childLast, setCl] = useState('');
  const [childAge, setCa] = useState(undefined);

  const submit = () => {
    postPrimary()
    postSecondary()
    postChild()
    props.history.push('/home')
  }

    const postPrimary = () => {
        axios.post('/api/add-primary', {first, last, phone, relation})
        .then(response => {
          const {first, last, phone, relation} = response.data
          props.setPrimaryInfo()})
    }
    
    const postSecondary = () => {
      axios.post('/api/add-secondary', {secondaryFirst, secondaryLast, secondaryPhone, secondaryRelation})
    }

    const postChild = () => {
      axios.post('/api/add-child', {childFirst, childLast, childAge})
    }

    // console.log(secondaryLast)
  return (
    <div className='main-info-container'>
      <h1>Parent Info</h1>
        <div className='info-container'>
                <h2>Primary Contact</h2>
            <div className='info-action-container'>
              <input 
                id='login-input' 
                type='text'
                placeholder='First Name'
                onChange={event => setPf(event.target.value)}/>
              <input 
                id='login-input' 
                type='text' 
                placeholder='Last Name'
                onChange={event => setPl(event.target.value)}/>
              <input 
                id='login-input' 
                type='number' 
                placeholder='Phone Number'
                onChange={event => setPh(event.target.value)}/>
              <input 
                id='login-input' 
                type='text' 
                placeholder='Relationship to Child'
                onChange={event => setPr(event.target.value)}/>
            </div>
            <h2>Secondary Contact</h2>
            <div className='info-action-container'>
              <input 
                id='login-input' 
                type='text'
                placeholder='First Name'
                onChange={event => setSf(event.target.value)}/>
              <input 
                id='login-input' 
                type='text' 
                placeholder='Last Name'
                onChange={event => setSl(event.target.value)}/>
              <input 
                id='login-input' 
                type='number' 
                placeholder='Phone Number'
                onChange={event => setSph(event.target.value)}/>
              <input 
                id='login-input' 
                type='text' 
                placeholder='Relationship to Child'
                onChange={event => setSr(event.target.value)}/>
            </div>
            <h2>Child Info</h2>
            <div className='info-action-container'>
              <input 
                id='login-input' 
                type='text'
                placeholder='First Name'
                onChange={event => setCf(event.target.value)}/>
              <input 
                id='login-input' 
                type='text' 
                placeholder='Last Name'
                onChange={event => setCl(event.target.value)}/>
              <input 
                id='login-input' 
                type='number' 
                placeholder='Age'
                onChange={event => setCa(event.target.value)}/>
            </div>
              <button onClick={submit}id='login-button'>SUBMIT</button>
        </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
      user: reduxState.reducer,
      primary: reduxState.setPrimaryInfo
  }
}

export default connect(mapStateToProps, {setUserInfo, setPrimaryInfo})(withRouter(Info))
