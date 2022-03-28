import React,{Component} from 'react';
import './App.css';
import TicketTable from './components/TicketTable'
import Ticket from './components/Ticket'
import Newticket from './components/Newticket';
import Editticket from './components/Editticket'
import './All.css'
import { BrowserRouter as Router,Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="topnav">  
      <span id="T">T</span>
        <span id="i">i</span>
        <span id="c">c</span>
        <span id="k">k</span>
        <span id="e">e</span>
        <span id="t">t</span>
        <span id="T1">T</span>
        <span id="r">r</span>
        <span id="a">a</span>
        <span id="c1">c</span>
        <span id="k1">k</span>
        <span id="e1">e</span>
        <span id="r1">r</span>
     </div>
      <Router>
       <Switch>
            <Route path='/default' component={TicketTable} />
            <Route path='/ticket' component={Ticket}/>
            <Route path='/Newticket' component={Newticket}/>
            <Route path='/Editticket' component={Editticket}/>
            <Redirect to='/default' /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
