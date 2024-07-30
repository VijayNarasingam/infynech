import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './style.css'

function Update() {
    const {id} = useParams();
    const [values,setValues] =useState({
        taskName:'',
        priority:'',
        startDate:'',
        endDate:'',
    });



    useEffect(()=>{
        axios.get('http://localhost:4000/User/'+id)
        .then(res => {
            setValues ({...values, taskName: res.data.taskName, priority: res.data.priority, startDate: res.data.startDate, endDate: res.data.endDate})
        })
        .catch(err =>console.log(err))
    })

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:4000/User/'+id, values)
        .then (res => {
           navigate('/user')
        })
        .catch(err =>console.log(err))
    }


  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"  >
                <form onSubmit={handleSubmit} >
                    <img className='m-0' src="../src/assets/DealsDray(1).png" alt="" />
                    <h2>update</h2>

                   
                    <div className="mb-2">
                        <label >Task Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        value={values.taskName} onChange={e=> setValues({...values, name: e.target.values})} />
                    </div>
                    <div className="mb-2">
                        <label >Priority</label>
                        <select type="" placeholder='Enter Mobile no' className='form-control'
                        value={values.priority} onChange={e=> setValues({...values, designation:e.target.values})}>
                            <option value="Designation">Select Designation</option>
                                        <option value="Highest">Highest</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>

                        </select>
                    </div>
                    <div className="mb-2">
                        <label >Start Date</label>
                        <input type="date" placeholder='Enter Email' className='form-control'
                        value={values.startDate} onChange={e=> setValues({...values, email:e.target.values})}/>
                    </div>
                    <div className="mb-2">
                        <label >End Date</label>
                        <input type="date" placeholder='Enter Mobile no' className='form-control'
                        value={values.endDate} onChange={e=> setValues({...values, mobile:e.target.values})}/>
                    </div>
                    

        
                    
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update;