import { ADD_TICKET, EDIT_TICKET, DELETE_TICKET, SET_CURRENT, SAVE_TICKET } from "../constants"

export const addTicket=(title,description,due_date)=>{
    return{
        type:ADD_TICKET,
        title:title,
        description:description,
        due_date:due_date
    }
}

export const editTicket=(t)=>{
    return{
        type:EDIT_TICKET,
        t:t
    }
}

export const deleteTicket=(t)=>{
    
    return{
        type:DELETE_TICKET,
        t:t
    }
}

export const setCurrentTicket=(t)=>{
    return{
        type:SET_CURRENT,
        t:t
    }
}

export const saveTicket=(tk)=>{
    return{
        type:SAVE_TICKET,
        tk:tk
    }
}