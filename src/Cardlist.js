import React from 'react'
import {Card} from './Card.js'

export default function Cardlist(props) {
  return (
  <div className='container'> 
    <h3 className='text-centre my-3'>vCard List</h3>
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">vCard Name</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col"></th>
          {/* <th scope="col">Starting Date</th> */}
        </tr>
      </thead>
      <tbody>
        {props.cards.map((card,index) => {
          return <Card card={card} key= {card.ID} index= {index +1} onDelete= {props.onDelete} download={props.download}/>
        })}
      </tbody>                        
    </table>
  </div>
  )
}
