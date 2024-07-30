import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {v4 as uuid} from "uuid";
import axios from 'axios';


function Create() {
    
    const [taskName,setTaskName] =useState()
    const [priority,setPriority] =useState()
    const [startDate,setStartDate] =useState()
    const [endDate,setEndDate] =useState()
    const [status,setStatus] =useState()



    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/User/',{taskName, priority, startDate, endDate, status})
        .then(result => {
            console.log(result)
            navigate('/user')
        })
        .catch(err => console.log(err))

    }

   


  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"  >
                <form onSubmit={handleSubmit} >
                    <h2>Add User</h2>
            
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={(e)=> setTaskName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Priority</label>
                        <select type="text" placeholder='Enter Email' className='form-control'
                        onChange={(e)=> setPriority(e.target.value)}>
                            <option value="Designation">Select Designation</option>
                                        <option value="Highest">Highest</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>

                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Start Date</label>
                        <input type="date" placeholder='' className='form-control'
                        onChange={(e)=> setStartDate(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">End Date</label>
                        <input type="date" placeholder='' className='form-control'
                        onChange={(e)=> setEndDate(e.target.value)}/>
                    </div>

                   
                    <button className='btn btn-success' >Create</button>
                    <Link to={'/user'}><button type='submit' className='btn btn-danger'>Cancel</button></Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Create;
