import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./domains/landing";
import { Login } from "./domains/login/login";
import { Example } from "./components/feeds"
import { Home } from "./components/home"

export default function App(){
return (
  <Router forceRefresh>
    <Switch> 
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/test" exact>
        <Example />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>

    </Switch>
  </Router>
)}