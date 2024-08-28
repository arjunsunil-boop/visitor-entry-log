import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {

  const [view, ChangeView] = useState(

    []


  )

  const fetch = () => {

    axios.get("http://127.0.0.1:5000/users").then(

      (ItIsTheResponse) => {

        ChangeView(ItIsTheResponse.data)


      }
    ).catch()


  }

  useEffect(
    () => {
      fetch()
    }, []
  )


  return (
    <div>
      <Nav />
      <br />

      <div className="container">

        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table">
              <thead>
                <tr>

                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Date</th>
                  <th scope="col">email</th>
                </tr>
              </thead>
              <tbody>
                {

                  view.map(
                    (i, index) => {

                      return (

                        <tr>
                          <td>{i.name}</td>
                          <td>{i.age}</td>
                          <td>{i.date}</td>
                          <td>{i.email}</td>

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