import React, { useState } from 'react';

function FilePicker() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  return (
    <div className="">
      <input type="file" multiple onChange={handleFileChange} />
      <ul>
        {Array.from(selectedFiles).map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilePicker;
