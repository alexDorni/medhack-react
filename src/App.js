import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./domains/landing";
import { Login } from "./domains/login/login";
import { Example } from "./components/feeds"
import { Home } from "./components/home"

export default function App(){
return (
  <BrowserRouter forceRefresh>
    <Switch> 

      <Route path="/login" component={Login}/>

      <Route path="/test" component={Example}/>

      <Route path="/home" component={Home}/>
      
      <Route path="/" exact component={Landing} />


    </Switch>
  </BrowserRouter>
  
)}