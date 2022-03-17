import React, { useState } from 'react';
import api from '../../api'
import { useSnackbar } from 'notistack';

import './index.css';

function FileUploader() {
  const { enqueueSnackbar } = useSnackbar();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');

  const saveFile = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleUploadFile = async () => {
    const res = await api.uploadFile(file, fileName);
    const message = res && res.data && res.data.message;

    if (message) {
      enqueueSnackbar(message);
    }
  }

  return (
    <div className="fileUploader">
      <input type='file' onChange={saveFile} />
      <button onClick={handleUploadFile}>Upload</button>
    </div>
  );
}

export default FileUploader;