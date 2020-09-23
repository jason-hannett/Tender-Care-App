import React from 'react' 
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/auth/Auth'
import Home from './Components/home/Home'
import Profile from './Components/profile/Profile'

export default (
    <Switch>
        <Route exact path = '/home' component = {Home}/>
        <Route path = '/auth' component = {Auth}/>
        <Route path = '/profile' component = {Profile}/>
    </Switch>
)