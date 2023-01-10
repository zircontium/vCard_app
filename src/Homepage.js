import React from 'react'
import Cardlist from './Cardlist.js';
import { Link } from 'react-router-dom';

export default function Homepage(props) {
  return (
    <div>
        {props.cards.lenght===0? "No vCards. Please add vCard by clicking the button below.":
        <Cardlist cards = {props.cards} onDelete={props.onDelete} download={props.download}/>
        }
        <div className='container'> 
        <Link to='/addcard'>
          <button type="button" className="btn btn-dark">Add vCard</button>
        </Link>
        </div>  
    </div> 
  )
}
