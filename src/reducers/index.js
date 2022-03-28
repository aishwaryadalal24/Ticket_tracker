import { ADD_TICKET,EDIT_TICKET,DELETE_TICKET, SET_CURRENT, SAVE_TICKET } from "../constants"
import { combineReducers } from 'redux'
import { BrowserRouter as Router,Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

const fs = require('browserify-fs');

let ticketsarray = require("../ticketsdata.json");

const initialState={

    totalTickets:ticketsarray.length,
    key:"",
    Title:"",
    Description:"",
    Due_Date:"",
    Status:"Open",
    CurrentTicket:{
        key:10000000,
        Title:"",
        Description:"",
        Due_Date:"",
        Status:""
    },
    Currentind:0,
    showLoading:false,
}
const ticketTracker=(state=initialState,action)=>{
    
         switch(action.type){
            case ADD_TICKET:
                let ticket={
                    key:1+ticketsarray[ticketsarray.length-1].key,
                    Title:action.title,
                    Description:action.description,
                    Due_Date:action.due_date,
                    Status:"Open"
                }
                ticketsarray.push(ticket);
                fs.writeFile("../ticketsdata.json", JSON.stringify(ticketsarray), err => {
                    if (err) throw err;
                });
                return{
                    ...state,
                    totalTickets:state.totalTickets+1,

                }

            case EDIT_TICKET:
                let index1 = ticketsarray.findIndex(x=>x===action.t)
                return {
                    ...state,
                    CurrentTicket:{
                        key:action.t.key,
                        Title:action.t.Title,
                        Description:action.t.Description,
                        Due_Date:action.t.Due_Date,
                        Status:action.t.Status
                    },
                    Currentind:index1

                }

            case DELETE_TICKET:
                let index = ticketsarray.findIndex(x=>x.key===action.t.key)
                if (index > -1) {
                    ticketsarray.splice(index, 1);
                }
               
                fs.writeFile("../ticketsdata.json", JSON.stringify(ticketsarray), err => {
                    if (err) throw err;
                });
                return{
                    ...state,
                    totalTickets:state.totalTickets-1,
                }
            case SET_CURRENT:
               
                return{
                    ...state,
                    CurrentTicket:{
                        key:action.t.key,
                        Title:action.t.Title,
                        Description:action.t.Description,
                        Due_Date:action.t.Due_Date,
                        Status:action.t.Status
                    },
                }
            
            case SAVE_TICKET:
                let index2=ticketsarray.findIndex(x=>x.key===action.tk.key)
                ticketsarray[index2]=action.tk
                fs.writeFile("../ticketsdata.json", JSON.stringify(ticketsarray), err => {
                    if (err) throw err;
                });
                return state
            
            default:
                return state
         }
}

const rootReducer=combineReducers({
    ticketTracker:ticketTracker,
})

export default rootReducer;