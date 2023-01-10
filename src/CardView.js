import React from 'react'
import img from './qr.png';
import ShareModal from './ShareModal';
import { useLocation } from 'react-router-dom';

export default function CardView({download}) {
    let location = useLocation();
  return (
    <div className='container p-3'>
        <ShareModal/>
        <div className="card text-center row">
            <div className="card-header">
                <div className='row'>
                    <div className='col-10'>{location.state.card.CARD_NAME}</div>
                    <div className='col-2'>
                        <button type="button" className="btn btn-info" onClick={() =>{download(location.state.card)}}><i className="bi bi-download"/></button>
                        <button type="button" className="btn btn-info mx-3" data-bs-toggle="modal" data-bs-target="#shareModal"><i className="bi bi-share"/></button>
                        </div>
                </div>
                
            </div>
            {/* <div className='col-1'>
                <button type="button" className="btn btn-info">Share <i className="bi bi-share"></i></button>
            </div> */}
            <div className="card-body row">
                <div className='col-3'>
                <img  src={img} />
                </div>
                <div className='col-9'>
                <h4 className="card-title">{location.state.card.FIRST_NAME} {location.state.card.LAST_NAME}</h4>
                <h5 className="card-text">{location.state.card.JOB_TITLE}, {location.state.card.ORG_DEPARTMENT}, {location.state.card.ORGANIZATION}</h5>
                <ul className="list-group">
                    <li className="list-group-item text-start">&nbsp;&nbsp;&nbsp;&nbsp;{location.state.card.ADDRESS_1} {location.state.card.ADDRESS_2}
                    <br/><i className="bi bi-geo-alt-fill"/> {location.state.card.CITY},-{location.state.card.POSTAL_CODE}
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;{location.state.card.REGION}, {location.state.card.COUNTRY}<br/><div className="text-secondary">Address</div></li>                  
                    <li className="list-group-item text-start"><i className="bi bi-telephone"/> {location.state.card.PHONE_NO}<br/><div className="text-secondary">Phone</div></li>
                    <li className="list-group-item text-start"><i className="bi bi-phone"/> {location.state.card.MOBILE_NO}<br/><div className="text-secondary">Mobile</div></li>
                    <li className="list-group-item text-start"><i className="bi bi-envelope"/> {location.state.card.EMAIL}<br/><div className="text-secondary">Email</div></li>
                    <li className="list-group-item text-start"><i className="bi bi-globe"/> {location.state.card.WEBSITE}<br/><div className="text-secondary">Website</div></li>
                    <li className="list-group-item text-start"><i className="bi bi-twitter"/> {location.state.card.TWITTER}<br/><div className="text-secondary">Twitter</div></li>
                    <li className="list-group-item text-start"><i className="bi bi-linkedin"/> {location.state.card.LINKEDIN}<br/><div className="text-secondary">LinkedIn</div></li>
                    <li className="list-group-item text-start"><i className="bi bi-clipboard"/> {location.state.card.NOTES}<br/><div className="text-secondary">Notes</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
