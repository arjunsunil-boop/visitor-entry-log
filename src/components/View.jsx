import React from 'react'
import Nav from './Nav'

const View = () => {
  return (
    <div>
      <Nav/>
      <br />

      <div className="container">

        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
              <thead>
                <tr>
                 
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td>Mark</td>
                  <td>23</td>
                  <td>12-02-2023</td>
                </tr>
 
              </tbody>
            </table>


          </div>
        </div>


      </div>
    </div>
  )
}

export default View