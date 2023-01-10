import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function AddCardForm({addCard}) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/")
    addCard(inputs);
    //alert(inputs);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group container p-3">

          <label><h4>vCard Name:</h4></label>
          <input type="text" name="CARD_NAME" onChange={handleChange} value={inputs.CARD_NAME || ""} className="form-control" id="exampleInputEmail1"/>

          <div className="container p-3">
            <h3>Personal</h3>
            <label>First Name:</label>
            <input type="text" name="FIRST_NAME" onChange={handleChange} value={inputs.FIRST_NAME || ""}  className="form-control" id="exampleInputEmail1"/>
            <label>Last Name:</label>
            <input type="text" name="LAST_NAME" onChange={handleChange} value={inputs.LAST_NAME || ""} className="form-control" id="exampleInputEmail1"/>
          </div>

          <div className="container p-3">
            <h3>Organization</h3>
            <label>Company Name:</label>
            <input type="text" name="ORGANIZATION" onChange={handleChange} value={inputs.ORGANIZATION || ""} className="form-control" id="exampleInputEmail1"/>
            <label>Job Title:</label>
            <input type="text" name="JOB_TITLE" onChange={handleChange} value={inputs.JOB_TITLE || ""} className="form-control" id="exampleInputEmail1"/>           
            <label>Job Department:</label>
            <input type="text" name="ORG_DEPARTMENT" onChange={handleChange} value={inputs.ORG_DEPARTMENT || ""} className="form-control" id="exampleInputEmail1"/>
          </div>

          <div className="container p-3">
            <h3>Address</h3>
            <label>Address #1:</label>
            <input type="text" name="ADDRESS_1" onChange={handleChange} value={inputs.ADDRESS_1 || ""} className="form-control" id="exampleInputEmail1"/>
            <label>Address #2:</label>
            <input type="text" name="ADDRESS_2" onChange={handleChange} value={inputs.ADDRESS_2 || ""} className="form-control" id="exampleInputEmail1"/>
            <label>City:</label>
            <input type="text" name="CITY" onChange={handleChange} value={inputs.CITY || ""} className="form-control" id="exampleInputEmail1"/>
            <label>State / Region:</label>
            <input type="text" name="REGION" onChange={handleChange} value={inputs.REGION || ""} className="form-control" id="exampleInputEmail1"/>
            <label>Postal Code:</label>
            <input type="number" name="POSTAL_CODE" onChange={handleChange} value={inputs.POSTAL_CODE || ""} className="form-control" id="exampleInputEmail1" maxLength="7"/>
            <label>Country:</label>
            <input type="text" name="COUNTRY" onChange={handleChange} value={inputs.COUNTRY || ""} className="form-control" id="exampleInputEmail1"/>
          </div>

          <div className="container p-3">
            <h3>Contact</h3>
            <label>Email:</label>
            <input type="text" name="EMAIL" onChange={handleChange} value={inputs.EMAIL || ""} className="form-control" id="exampleInputEmail1"/>
            <label>Website:</label>
            <input type="text" name="WEBSITE" onChange={handleChange} value={inputs.WEBSITE || ""} className="form-control" id="exampleInputEmail1"/>
            <label>Phone:</label>
            <input type="number" name="PHONE_NO" onChange={handleChange} value={inputs.PHONE_NO || ""} className="form-control" id="exampleInputEmail1"maxLength="8"/>
            <label>Mobile Phone:</label>
            <input type="number" name="MOBILE_NO" onChange={handleChange} value={inputs.MOBILE_NO|| ""}  className="form-control" id="exampleInputEmail1" maxLength="10"/>
          </div>
          
          <div className="container p-3">
            <h3>Social Networks</h3>
            <label>Twitter:</label>
            <input type="text" name="TWITTER" onChange={handleChange} value={inputs.TWITTER || ""} className="form-control" id="exampleInputEmail1"/>
            <label>LinkedIn:</label>
            <input type="text" name="LINKEDIN" onChange={handleChange} value={inputs.LINKEDIN || ""} className="form-control" id="exampleInputEmail1"/>
            <label>Notes</label>
            <input type="text" name="NOTES" onChange={handleChange} value={inputs.NOTES || ""} className="form-control" id="exampleInputEmail1"/>
          </div>

          <div className="container p-3 ">
            <button type="submit" className="btn btn-primary mx-3" >Submit</button>
            <button type="Discard" className="btn btn-danger mx-3" onClick={()=>navigate("/")}>Cancel</button>
          </div>
          
        </div>       
      </form>
    </div>
  )
}
