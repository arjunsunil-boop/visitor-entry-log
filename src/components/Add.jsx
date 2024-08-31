import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
  const [add, changeAdd] = useState(

    {
      "name": "",
      "age": "",
      "email": "",
      "date": ""
    }
  )
  const addingOneByone = (theEvent)=>{

    changeAdd({...add,[theEvent.target.name]:theEvent.target.value})


  }

  const send = () => {
    console.log(add)
    axios.post("http://127.0.0.1:5000/add", add, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      ()=>{
        alert("Success")
      }
    ).catch((error) => {
      console.error(error);
      alert("Error occurred");
    });
  }
  return (
    <div>
      <Nav />
      <br />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col md-6 col lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={addingOneByone} name='name' value={add.name} />
              </div>
              <div className="col col-12 col-sm-6 col md-6 col lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Age</label>
                <input type="text" className="form-control" onChange={addingOneByone} name='age' value={add.age} />

              </div>
              <div className="col col-12 col-sm-6 col md-6 col lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" onChange={addingOneByone} name='email' value={add.email} />

              </div>
              <div className="col col-12 col-sm-6 col md-6 col lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Date</label>
                <input type="date" className="form-control" onChange={addingOneByone} name='date' value={add.date}/>

              </div>
              <div className="col col-12 col-sm-6 col md-6 col lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success" onClick={send}>Submit</button>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Add