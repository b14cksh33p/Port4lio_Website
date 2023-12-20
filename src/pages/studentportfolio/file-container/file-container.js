import React, { useRef, useState, useEffect } from 'react';
import './file-container.css';
import UploadIcon from '../../../assets/images/upload-icon.png';
import { fileDb } from '../../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import firebase from '../../../firebaseConfig.js';

const FileContainer = ({ highlightedText }) => {
    const fileInputRef = useRef(null);
    const imgRef = useRef(null);
    const [fileUpload, setFileUpload] = useState();
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (event) => {
      setFileUpload(event.target.files[0]);
      alert('File selected: ' + event.target.files[0].name + '. Click the Upload button to continue.');
    };

    const uploadFile = () => {
        if(!fileUpload) return;

        try{
          const currentUser = firebase.auth().currentUser;
          if (currentUser) {
            const userID = currentUser.uid;
            const fileRef = ref(fileDb, `students_files/${userID}/${fileUpload.name}`);
  
          uploadBytes(fileRef, fileUpload).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                  console.log(url);
                  alert("File successfully uploaded.")
                });
              });
            } 
        } catch (error){
          alert(`Authentication failed: ${error}`);
        }
    }
    
    const openFileFunction = ()=> {
      fileInputRef.current.click();
    }

    //Drag and Drop function
    useEffect(() => {
      const imgElement = imgRef.current;

      const handleDragEnter = (e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(true);
      };

      const handleDragLeave = (e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
      };

      const handleDragOver = (e) => {
          e.preventDefault();
          e.stopPropagation();
      };

      const handleDrop = (e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(true);

          const files = e.dataTransfer.files;
          if (files.length > 0) {
              setFileUpload(files[0]);
              alert('File selected: ' + files[0].name + '. Click the Upload button to continue.');
          }
      };

        imgElement.addEventListener('dragenter', handleDragEnter);
        imgElement.addEventListener('dragover', handleDragOver);
        imgElement.addEventListener('dragleave', handleDragLeave);
        imgElement.addEventListener('drop', handleDrop);

        return () => {
            imgElement.removeEventListener('dragenter', handleDragEnter);
            imgElement.removeEventListener('dragover', handleDragOver);
            imgElement.removeEventListener('dragleave', handleDragLeave);
            imgElement.removeEventListener('drop', handleDrop);
        };
    }, []);
    


  return (
    <div className={`FC-container ${isDragging ? 'dragging' : ''}`}>
      <img
      ref={imgRef}
      src={UploadIcon}
      width='80px'
      height='80px'
      alt='Upload icon'
      />
      <p>
        Drag and Drop <span className='text-highlighted'>{ highlightedText }</span> here
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
