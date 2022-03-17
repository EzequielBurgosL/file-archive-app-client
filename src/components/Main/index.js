import React from 'react';
import FileList from '../FileList';
import FileUploader from '../FileUploader';

import './index.css';

function App() {
  return (
    <div className='container'>
      <FileUploader />
      <FileList />
    </div>
  );
}

export default App;