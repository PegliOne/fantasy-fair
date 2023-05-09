import './App.css';
import Navbar from './components/shared/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage/Home';
import Story from './components/stories/Story';
import Categories from './components/categories/Categories';
import Create from './components/create/Create';
import SignUp from './components/sign-up/SignUp';
import LogIn from './components/log-in/LogIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/stories/:id">
            <Story/>
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
      </div>
    </Router>
  );
}

export default App;
