import logo from './logo.svg';
import './App.css';
import './main.js';
import './components/style.css';
import AccPg from './components/accPg';
import ContactPg  from './components/contactpg';
import MenuPg from './components/menupg';
import Home from './components/home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/home'>
           <Home/>
          </Route> 
          <Route exact path='/menu'>
           <MenuPg/>
          </Route>
          <Route exact path='/account'>
           <AccPg/>
          </Route>
          <Route exact path='/contact'>
           <ContactPg />
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
