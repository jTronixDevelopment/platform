import React, { Component } from 'react';

//=== Modules ==================================================================
import { Route, Switch } from 'react-router-dom';

//=== Pages ====================================================================
import SignInWidget from './Pages/SignIn/signInWidget';
import SignUpWidget from './Pages/SignUp/signUpWidget';
import Profile from './Pages/Profile/profile';
import Places from './Pages/Places/places';
import Search from './Pages/Search/Search';
import Testing from './Pages/Testing/testing';

//=== Components ===============================================================
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';

import FeedItem from './Pages/Places/places';

import { Firebase } from './firebase/setup';

// import { LOG_IN } from './redux/actions/authactions'

export default class App extends Component {
  constructor(){
    super();
    this.firebase = Firebase;
  }

  saveFireBase(firebase){
    this.firebase = firebase;
  }

  render() {
    return (
      <div>
        <Switch>
            <Route path='*' component={ Header }/>
        </Switch>
        <Switch>
          <Route exact path='/' render={ props => ( <SignInWidget firebase={this.firebase} saveFireBase={this.saveFireBase.bind(this)}/> )}/>
          <Route path='/signup' render={ props => ( <SignUpWidget firebase={this.firebase}  saveFireBase={this.saveFireBase.bind(this)}/> )} />
          <Route path='/signin' render={ props => ( <SignInWidget firebase={this.firebase}  saveFireBase={this.saveFireBase.bind(this)}/> )} />
          <Route path='/profile' render={ props => ( <Profile firebase={this.firebase} saveFireBase={this.saveFireBase.bind(this)} /> )}/>
          <Route path='/testing' render={ props => ( <Testing firebase={this.firebase} saveFireBase={this.saveFireBase.bind(this)} /> )}/>
          <Route path='/places' component={ Places }/>
          <Route path='/search' component={ Search }/>
        </Switch>
        <Switch>
          <Route exact path='/places' component={ FeedItem }/>
        </Switch>
        <Switch>
          <Route path='*' component={ Navigation }/>
        </Switch>
      </div>
    );
  }
}
