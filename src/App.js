import "./App.css";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/homepage/Home";
import Categories from "./components/categories/Categories";
import Category from "./components/categories/Category";
import Create from "./components/story/Create";
import Edit from "./components/story/Edit";
import SignUp from "./components/sign-up/SignUp";
import LogIn from "./components/log-in/LogIn";
import Story from "./components/story/StoryDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/stories/:id/edit">
            <Edit/>
          </Route>
          <Route path="/stories/:id">
            <Story/>
          </Route>
          <Route path="/categories/:category">
            <Category/>
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
