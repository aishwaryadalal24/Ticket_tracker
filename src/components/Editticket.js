import React from 'react'
import { BrowserRouter as Router,Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveTicket } from '../actions/actions';
import { editTicket } from '../actions/actions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Editticket=()=>{

    const dispatch=useDispatch()
    let history=useHistory()
    let ticket=useSelector(state=>state.ticketTracker. CurrentTicket)

   const [title, setTitle] = React.useState(ticket.Title);
   const [description, setDescription] = React.useState(ticket.Description);
   const [due_date, setDate]= React.useState(ticket.Due_Date);
   const [status, setStatus]= React.useState(ticket.Status);
  
   const handleTitle=(event)=>{
    setTitle(event.target.value);
   }

   const handleDescription=(event)=>{
    setDescription(event.target.value);
   }

   const handleDate=(event)=>{
      setDate(event.target.value)
   }

   const handleStatus=(event)=>{
    setStatus(event.target.value)
 }

    const HandleClick=(event)=>{
        let tk={
            key:ticket.key,
            Title:title,
            Description:description,
            Due_Date:due_date,
            Status:status
        }
        if(title===''){
           alert("Please Enter title, title can not be a empty string")
           event.preventDefault();
        }
        else if(description===''){
            alert("Please Enter Description")
           event.preventDefault();
        }
        else if(due_date===''){
            alert("Please Enter Date")
           event.preventDefault();
        }
        else{
            dispatch(saveTicket(tk))
            history.replace('/default')
        }
    }

    const HandleClickback=(event)=>{
        history.replace(`/ticket/${ticket.key}`);
    }

    return(
        <> 
        <center>
        <div className="container">
        <h1>Edit Ticket</h1>
        <form>
            <label>Ticket Title : </label>
            <input type="text" onChange={handleTitle} value={title} ></input>
            <br/>
            <label>Ticket Description : </label>
            <textarea  onChange={handleDescription} value={description} ></textarea>
            <br/>
            <label id="label1">Ticket Due_Date : </label>
            <input type="date" onChange={handleDate} value={due_date}></input>
           
            <label id="label1">Ticket Status : </label>
            <select onChange={handleStatus}>
                <option value="Open">Open</option>
                <option value="In_Progess">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <br/><br/>
            <br/>
            <br/>
            <button id="backbutton" onClick={HandleClickback}> Go Back </button>
          
            <button id="formbutton" onClick={HandleClick}>Save</button>
            
        </form>
        </div>
        </center>
        </>
    )
}

export default withRouter(Editticket)