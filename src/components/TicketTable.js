import React from 'react'
import Data from '../ticketsdata.json'
import { BrowserRouter as Router,Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import '../All.css'
import { useDispatch } from 'react-redux';
import { setCurrentTicket } from '../actions/actions';

const TicketTable=()=>{

    let history=useHistory()
    const dispatch=useDispatch()

    const HandleClick=()=>{
        history.replace('./Newticket');
    }

    const HandleLink=(ticket)=>{
        dispatch(setCurrentTicket(ticket))
        history.replace(`/ticket/${ticket.key}`);
    }


 return (
     <>
     <br/>
    <button id="btn" onClick={HandleClick}> Create Ticket + </button>
     <center>
     <br/>
     <h1 id="midtext">All Tickets </h1>
     <table id="tktable">
        <tr>
            <th>Key</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
        </tr>
       {Data.map(ticket=>{
           return(
           <tr>
               <td>{ticket.key}</td>
               <td id="link" onClick={()=>HandleLink(ticket)}>{ticket.Title}</td>
               <td>{ticket.Description}</td>
               <td>{ticket.Due_Date}</td>
               <td>{ticket.Status}</td>
           </tr>
           )
       })}
       </table>
       </center>
     </>
 )
}

export default TicketTable;