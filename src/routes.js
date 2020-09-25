import React from 'react' 
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/auth/Auth'
import Register from './Components/auth/Register'
import Info from './Components/auth/Info'
import Home from './Components/home/Home'
import Account from './Components/account/Account'
import Billing from './Components/billing/Billing'
import Calendar from './Components/calendar/Calendar'
import Menu from './Components/nav/Menu'

export default (
    <Switch>
        <Route exact path = '/auth' component = {Auth}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/info' component = {Info}/>
        <Route path = '/info/add-child' component = {Info}/>
        <Route path = '/home' component = {Home}/>
        <Route path = '/account' component = {Account}/>
        <Route path = '/menu' component = {Menu}/>
        <Route path = '/calendar' component = {Calendar}/>
        <Route path = '/billing' component = {Billing}/>
    </Switch>
)