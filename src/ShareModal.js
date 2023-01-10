import React,{useState} from 'react';
import QRCode from 'react-qr-code';
import copy from "copy-to-clipboard"; 
import { RWebShare } from "react-web-share";

export default function ShareModal({buttonRef}) {

    const [copyText, setCopyText] = useState('Copy');
    const [copyValue, setCopyValue] = useState('some.com/share');
  
    const handleCopyText = (e) => {
        setCopyValue(e.target.value);
    } 
    
    const copyToClipboard = () => {
       copy(copyValue);
       setCopyText("Copied");
       setTimeout(()=>{
        setCopyText("Copy");
    },4000)
    }
    return (
        <div className="modal fade text-dark" id="shareModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Share Link</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="">
                            <div className='container d-flex justify-content-center d-flex align-items-center'>
                                <QRCode
                                    title={copyValue}
                                    value={copyValue}                                    
                                />
                            </div>
                            <br/>
                            <p>Or copy link</p>
                            <div className="row">
                                <div className='col-9'>    
                                    <input type="text" className="form-control" id="copyLink" value={copyValue} onChange={handleCopyText} placeholder={(<i className="bi bi-link-45deg"/>)&&copyValue}/>
                                </div>
                                <div className='col-3'>                                    
                                    <button type="button" onClick={copyToClipboard} className="btn btn-warning">{copyText}</button>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <RWebShare
                            data={{
                            text: "Here is my vCard",
                            url: copyValue,
                            title: "vCard",
                            }}
                            onClick={() => console.log("shared successfully!")}>
                            <button type="button" className="btn btn-info">Share <i className="bi bi-share"/></button>
                        </RWebShare>
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
