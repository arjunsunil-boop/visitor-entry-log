import React, { useState } from 'react'
import Nav from './Nav'

const View = () => {

  const [view, ChangeView] = useState(
    [

      {
        "name": "John",
        "age": "30",
        "date": "01-01-2022"
      },
      {
        "name": "Jane",
        "age": "25",
        "date": "02-02-2022"
      },
      {
        "name": "Mike",
        "age": "35",
        "date": "03-03-2022"
      }
    ]

    
  )
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
                {

                  view.map(
                  (i,index)=>{

                    return(

                      <tr>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>{i.date}</td>
                    </tr>
                    )


                  }
                  )
                }

             

 
              </tbody>
            </table>


          </div>
        </div>


      </div>
    </div>
  )
}

export default View