import { withRouter } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router,Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { deleteTicket ,editTicket} from '../actions/actions';
import { useSelector } from 'react-redux';

const Ticket=(props)=>{

    let t=useSelector(state=>state.ticketTracker. CurrentTicket)
    let isloading=false;

    const dispatch=useDispatch()
    let history=useHistory()

    const HandleDelete=()=>{
        
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to do this action.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    dispatch(deleteTicket(t))
                    history.replace('/default')
                }
              },
              {
                label: 'No',
              }
            ]
          })
    }

    const HandleEdit=()=>{
        dispatch(editTicket(t))
        history.replace(`/Editticket/${t.key}`)
    }

    const HandleClickback=(event)=>{
      history.replace('/default');
  }

    return(
        <>
        <center>
         <div id="tkbox">
         <button id="backbutton1" onClick={HandleClickback}> &lt;&lt; </button>
            <br/>
             <h1 id="title">{t.Title}</h1>
             <strong>Description : </strong> {t.Description}
             <br/><br/>
             <strong>Status :</strong> {t.Status}
             <br/><br/>
             <strong>Due Date : </strong> {t.Due_Date}
             <br/><br/>
             <button id="editbutton" onClick={HandleEdit}>Edit</button>
            
             <button id="deletebutton" onClick={HandleDelete}>Delete</button>
        </div>
        </center>
        </>
    )
}

export default withRouter(Ticket);