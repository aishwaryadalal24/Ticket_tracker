import React from 'react'
import { BrowserRouter as Router,Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTicket } from '../actions/actions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 


const Newticket=()=>{

    const dispatch=useDispatch()
    let history=useHistory()

   const [title, setTitle] = React.useState('');
   const [description, setDescription] = React.useState('');
   const [due_date, setDate]= React.useState('');
  

   const handleTitle=(event)=>{
    setTitle(event.target.value);
   }

   const handleDescription=(event)=>{
    setDescription(event.target.value);
   }

   const handleDate=(event)=>{
      setDate(event.target.value)
   }

    const HandleClick=(event)=>{
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
            dispatch(addTicket(title,description,due_date))
            let path='/default';
            history.replace(path)
         }
    }

    const HandleClickback=(event)=>{
        history.replace('/default');
    }
  


    return(
        <>
        <center>
        <div className="container">
        <button id="backbutton1" onClick={HandleClickback}> &lt;&lt; </button>
           <br/>
        <h1>Add New Ticket</h1>
        <form>

            <label>Ticket Title : </label>
            <input type="text" onChange={handleTitle} placeholder="Enter title here.."></input>
            <br/>
            <label>Ticket Description : </label>
            <textarea type="text" onChange={handleDescription} placeholder="Enter Description of ticket here.."></textarea>
            <br/>
            <label id="label1">Ticket Due_Date : </label>
            <input type="date" onChange={handleDate}></input>
            <br/>
            <br/>
            <br/>
            <button id="formbutton1" onClick={HandleClick}>Create</button>
        </form>
        </div>
        </center>
        </>
    )
}

export default withRouter(Newticket);