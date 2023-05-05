import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Create from './components/Create';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/categories">
              <Categories/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/sign_up">
              <SignUp/>
            </Route>
            <Route path="/log_in">
              <LogIn/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
