import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'
import './user.css'


function User() {
    
    const [users, setUsers] = useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:4000/User')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[]);

    const handleDelete =(id)=>{
        axios.delete('http://localhost:4000/User/'+id)
        .then(res =>{
            location.reload()
        })
        .catch(errr => console.log(errr));
    }

  return (
    <div>

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className=" bg-white rounded p-3"  >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <Link to="/create" className='btn1'>Create</Link> &nbsp;&nbsp;&nbsp;
                <Link to="/import"className='btn1'>Import</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/export "className='btn1'>Export</Link>

            <table className='table'>
                    <thead>
                        <tr>
                           
                            <th>Task Name</th>
                            <th>Priority</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Settings</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item)=>{
                            return (
                                <tr>

                                    <td>{item.taskName}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>
              <Link to={'/taskManager'}><button type='submit' className='btn'>Open</button></Link>

                                    </td>
                                    <td>
                                        <Link to={`/update/${item.id}`} onClick={()=> handleEdit(user.id, user.name, user.email, user.mobile, user.designation, user.gender,user.course)}>Edit</Link> &nbsp;
                                        <Link onClick={()=> handleDelete(item.id)}>Delete</Link>
                                    </td>
                                </tr>
                            )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default User;