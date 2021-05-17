import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './components/Apps/Chat/Chat';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from './components/Login/Login';
import Search from "./components/Modals/Search";
import Start from "./components/Modals/Start";
import Account from './components/Profile/Account/Account';
import Profile from './components/Profile/Profile/Profile';
import Settings from './components/Profile/Settings/Settings';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/profile/overview">
        <Header/>
        <Search/>
          <Start/>
          <div className="container">
          <Profile/>
          </div>
          <div className="top-div"><a href="#" class="menu-link pe-0 top"><i className="bi bi-arrow-up"></i></a></div>
          <Footer/>
        </Route>
        <Route path="/profile/account">
        <Header/>
        <Search/>
          <Start/>
          <div className="container">
          <Account/>
          </div>
          <div className="top-div"><a href="#" class="menu-link pe-0 top"><i className="bi bi-arrow-up"></i></a></div>
          <Footer/>
        </Route>
        <Route path="/profile/settings">
        <Header/>
        <Search/>
          <Start/>
          <div className="container">
          <Settings/>
          </div>
          <div className="top-div"><a href="#" class="menu-link pe-0 top"><i className="bi bi-arrow-up"></i></a></div>
          <Footer/>
        </Route>
        <Route path="/chat">
        <Header/>
        <Search/>
          <Start/>
          <div className="container">
          <Chat/>
          </div>
          <div className="top-div"><a href="#" class="menu-link pe-0 top"><i className="bi bi-arrow-up"></i></a></div>
          <Footer/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
            <Route path="/">
        <Header/>
        <Search/>
          <Start/>
          <Dashboard/>
          <div className="top-div"><a href="#" class="menu-link pe-0 top"><i className="bi bi-arrow-up"></i></a></div>
          <Footer/>
        </Route>
      </Switch>
      
      
      
    </div>
    </Router>
  );
}

export default App;
