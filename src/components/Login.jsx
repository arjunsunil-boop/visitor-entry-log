import React from 'react'
import Nav from './Nav'

const Login = () => {
  return (
    <div>
        <Nav/>
        <div className="container" id='login-container'>
            <div className="row">
                <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-12">
                    <br />

                    <div className="card" id='login-card'> 

                        <div className="card-body ">


                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">username</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label">password</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-success">Login</button>
                                </div>
                                <div className="col-12"></div>
                                <div className="col-12"></div>
                                <div className="col-12"></div>
                                <div className="col-12"></div>
                            </div>
                        </div>

                        


                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Login