import axios from "axios";
import React, { useState, useEffect } from 'react'


const Employeelisting = () => {

    let [employeesData, setEmployeesData] = useState([]);



    const getEmployeesData = async () => {

        let url_link = "http://localhost:5000/employees";
        let res = await axios.get(url_link)

        console.log("result:", res)

        if (res.status === 200) {
            setEmployeesData();
        }
    }

    useEffect(() => {
        getEmployeesData();
    }, []);








    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h1>Employee Listing</h1>
                </div>

                <div className='card-body'>
                    <table className='table table-bodered'>
                        <thead className='bg-warning text-dark'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {employeesData &&
                                employeesData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a className="btn btn-success">Edit</a>
                                            <a className="btn btn-danger">Delete</a>
                                            <a className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))


                            }


                        </tbody>
                    </table>

                </div>


            </div>
        </div>
    )
}

export default Employeelisting 