import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const usenavigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
  },[]);

  const ProceedLogin = (e) =>{
    e.preventDefault();
    if (validate()) {
      //implement
      // console.log('proceed');
      fetch("http://localhost:4000/Login/"+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
          console.log(resp)
          if (Object.keys(resp).length===0) {
            toast.error('Please Enter Valid Username');
          }else{
            if (resp.password===password) {
              toast.success('Success');
              sessionStorage.setItem('username',username);
              usenavigate('/user')
            }else{
            toast.error('Please Enter Valid Password');

            }
          }
      }).catch((err)=>{
        toast.error('Login Failed due to :'+err.message);
      });
      
    }
  }
  const validate=()=>{
      let result=true;
      if (username ==='' || username ===null) {
        result=false;
        toast.warning('Please Enter Username')
      }
      if (password ==='' || password ===null) {
        result=false;
        toast.warning('Please Enter password')
      }
      return result;
  }

  return (
    <div className='row'>
       <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"  >
        <form onSubmit={ProceedLogin} className='container'>
          <div className="card">
            <div className="card-header">
              <h2>Admin Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <div className="group-1">
                <label>User Name</label>
                <input value={username} onChange={e=>setUsername(e.target.value)} className='form-control' type="text " />
                </div>
                <div className="group-2">
                <label>Password </label>
                <input value={password} onChange={e=>setPassword(e.target.value)} className='form-control' type="password " />
                </div>
             
              <button type='submit' className='btn btn-success'>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={'/register'}><button type='submit' className='btn btn-primary'>Register</button></Link>
              



              </div>
            </div>
            
          </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Login