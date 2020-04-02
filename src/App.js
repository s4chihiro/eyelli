import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.friendsList} />
        <div className="app-wrapper-content">
          <Route path="/profile/me" render={() => <Profile state={ props.state.profilePage } dispatch={props.dispatch} /> } />
  <Route path="/messages" render={() => <Dialogs state={ props.state.dialogsPage } dispatch={props.dispatch} /> } />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
