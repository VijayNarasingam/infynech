import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {v4 as uuid} from "uuid";
import axios from 'axios';

function Register() {

    const [id,setUserName] =useState()
    const [password,setPassword] =useState()



    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/Login/',{id, password})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))

    }

  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"  >
                <form onSubmit={handleSubmit} >
                    <h2>Create Account</h2>
            
                    <div className="mb-2">
                        <label htmlFor="">User Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={(e)=> setUserName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter password' className='form-control'
                        onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    
                    <button className='btn btn-success' >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register