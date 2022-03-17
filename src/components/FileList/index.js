import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import api from '../../api';

import './index.css';

function FileList() {
  const [files, setFiles] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    try {
      const files = await api.getFiles();

      setFiles(files);
    } catch (error) {
      console.log('FileList - error: ', error);
    }
  };

  const handleDeleteFile = async (fileName) => {
    const data = await api.deleteFile(fileName);
    const message = (data && data.message) || '';

    if (message) {
      enqueueSnackbar(message);
    }
  };

  return (
    <div className="fileList">
      <h2>File List</h2>
      <div className="fileList-container">
        {!!files.length && files.map((file) => {
          return (
            <div className="item" key={file.name}>
              <div className="item-name"><b>Name:</b> {file.name}</div>
              <div className="item-extension"><b>Extension:</b> {file.extension}</div>
              <div className="item-created"><b>Created:</b> {file.dateCreation}</div>
              <div className="item-modified"><b>Last modified:</b> {file.dateLastModification}</div>
              <div className="item-delete" onClick={() => handleDeleteFile(file.fileName)}>delete file</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default FileList;