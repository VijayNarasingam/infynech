import React, { useState } from 'react';
import ExportTasks from './Export';
import ImportTasks from './Import';
import '../src/TaskManager.css'
import { Link } from 'react-router-dom';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const handleImport = importedTasks => {
    setTasks(importedTasks);
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"  >
                
            <div className='ts'>
      <ExportTasks tasks={tasks} />
      <ImportTasks onImport={handleImport} />
      {/* Display tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name} - {task.description} - {task.dueDate}</li> 
        ))}
      </ul>
    </div>
    <Link to={'/user'}><button type='submit' className='btn btn-danger'>back</button></Link>
            </div>
    
    </div>
  );
};

export default TaskManager;
