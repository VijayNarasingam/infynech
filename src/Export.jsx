import React from 'react';
import axios from 'axios';

class Export extends React.Component {
  exportTasks = () => {
    axios.get('/export_csv')
      .then(response => {
        const blob = new Blob([response.data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'tasks.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error exporting tasks:', error);
      });
  };

  render() {
    return (
      <button onClick={this.exportTasks}>Export Tasks</button>
    );
  }
}

export default Export;
