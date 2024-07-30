import React, { useState } from 'react';

const Import = ({ onImport }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const importTasks = () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const csvString = reader.result;
      const lines = csvString.split('\n').slice(1); // Skip header

      const importedTasks = lines.map(line => {
        const [name, description, dueDate] = line.split(',');
        return { name, description, dueDate }; // Example fields, adjust as needed
      });

      onImport(importedTasks);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={importTasks}>Import Tasks</button>
    </div>
  );
};

export default Import;
