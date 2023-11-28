import React, { useRef, useState } from 'react';
import './file-container.css';
import UploadIcon from '../../../assets/images/upload-icon.png';
import { fileDb } from '../../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const FileContainer = () => {
    const fileInputRef = useRef(null);
    const [fileUpload, setFileUpload] = useState();

    const handleFileSelect = (event) => {
      setFileUpload(event.target.files[0]);
      alert('File selected: ' + event.target.files[0].name + '. Click the Upload button to continue.');
    };

    const uploadFile = () => {
        if(!fileUpload) return;

        const fileRef = ref(fileDb, `files/${fileUpload.name}`);

        uploadBytes(fileRef, fileUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                alert("File successfully uploaded.")
            });
        });
    }
    
    const openFileFunction = ()=> {
      fileInputRef.current.click();
    }

  return (
    <div className='FC-container'>
      <img src={UploadIcon} width='80px' height='80px' alt='Upload icon' />
      <p>
        Drag and Drop <span className='text-highlighted'>Assessment PDF</span> here
      </p>
      <input type='file' className='FC-input-file'onChange={handleFileSelect}
      ref={fileInputRef}
      style={{ display: 'none' }}
      />
      <div className='FC-buttons'>
        <button className='FC-openbtn' onClick={openFileFunction}>Select</button>
        <button className='FC-uploadbtn' onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
};

export default FileContainer;
