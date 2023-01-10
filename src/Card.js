import React from 'react'
import { useNavigate } from 'react-router-dom';
import ShareModal from './ShareModal';

export const Card = ({card, index, onDelete, download}) => {
  const navigate = useNavigate();
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{card.CARD_NAME}</td>
      <td className="pe-move" onClick={()=>navigate("/view", {state:{card}})}>{card.FIRST_NAME+ " " + card.LAST_NAME}</td>
      <td>{card.MOBILE_NO}</td>
      <td>
        <button type="button" className="btn btn-info"  data-bs-toggle="modal" data-bs-target="#shareModal">Share <i className="bi bi-share"/></button>
        <ShareModal/>
        <button type="button" className="btn btn-info mx-3" onClick={() =>{download(card)}}><i className="bi bi-download"/></button>
        <button type="button" className="btn btn-danger" onClick={() =>{onDelete(card)}}><i className="bi bi-trash-fill"/></button>
      </td>
    </tr>
  )
}
