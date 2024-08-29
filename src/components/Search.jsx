import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { UNSAFE_ErrorResponseImpl } from 'react-router-dom'

const Search = () => {

    const [search, changeSearch] = useState(
        {
            "searchName": ""
        }


    )

    const [output, changeOutput] = useState(
        []
    )

    const addingOneByone = (event) => {
        changeSearch({ ...search, [event.target.name]: event.target.value })
    }

    // const searchVisitor = () => {
    //     axios.post("http://127.0.0.1:5000/search", search, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(
    //         (response) => {
    //             console.log(response.data)
    //             changeOutput(response.data)
    //         }
    //     ).catch()
    // }

    //using axios get:

    const searchVisitorGet = () => {

        if (search.searchName.trim() =="") {
            alert("Search Field Empty")
            return
        }

        axios.get("http://127.0.0.1:5000/search", {params : {searchName : search.searchName.trim()}}).then(
            (response) => {
                changeOutput(response.data)
            }
        ).catch()
    }



    return (
        <div>
            <Nav />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Search visitors by Name</label>
                                <input type="text" className="form-control" name='searchName' value={search.searchName} onChange={addingOneByone} />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={searchVisitorGet}>Search</button>
                            </div>
                        </div>
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

                                            output.map(
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
            </div>
        </div>
    )
}

export default Search