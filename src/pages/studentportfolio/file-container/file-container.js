import React, { useRef, useState, useEffect } from 'react';
import './file-container.css';
import UploadIcon from '../../../assets/images/upload-icon.png';
import UploadDoneIcon from '../../../assets/images/upload-done.png';
import { fileDb } from '../../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebase from '../../../firebaseConfig.js';




const FileContainer = ({ highlightedText, isCompany}) => {
  const name = localStorage.getItem('profile');
    const fileInputRef = useRef(null);
    const imgRef = useRef(null);
    const imgRefhover = useRef(null);
    const containerRef = useRef(null);
    const [fileUpload, setFileUpload] = useState();
    const [isDragging, setIsDragging] = useState(false);
    const [isDisable, setIsDisable] = useState(true);
    const [isUploaded, setIsUploaded] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [docUrl, setDocUrl] = useState(null);
    const [fileLink, setFileLink] = useState(`students_files/${name.replaceAll('_', ' ')}/${name.replaceAll('_', ' ')} - ${highlightedText}`);
    
    useEffect(() => {
      if(isCompany != null){
        setFileLink(`Companies/${isCompany} - ${highlightedText}`);
      }
      });
    
    useEffect(() => {
      if(docUrl != null) {
        setIsUploaded(true);
      };
      });
    
    const fileRef = ref(fileDb, fileLink);

    getDownloadURL(fileRef)
    .then((url) => {
        setDocUrl(url);
    })
    .catch((error) => {
        console.error('Error retrieving download URL:', error);
    });
    


    //Open File function
    const openFileFunction = ()=> {
      fileInputRef.current.click();
    }

    //File Selection function
    const handleFileSelect = (event) => {
      const selectedFile = event.target.files[0];
      setFileUpload(selectedFile);
  
      if (selectedFile) {
        setIsSelected(true);
        handleFilePreview(selectedFile);
        setIsDisable(false);
      }
    };

    //File Upload function
    const uploadFile = () => {
        if(!fileUpload) return;
        setIsDisable(true);
        try{
          uploadBytes(fileRef, fileUpload).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                  console.log(url);
                  setFileUpload(true);
                  setIsSelected(false);
                  handleFilePreview(null);
                  //Modal here for Successful uploading of file
                });
              });
        } catch (error){
          alert(`Authentication failed: ${error}`);
        }
    }
    
    //File preview function
    const handleFilePreview = (selectedFile) => {
        if(selectedFile != null){
          const reader = new FileReader();
      
          reader.onload = (e) => {
            const result = e.target.result;
          if (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('text/')) {
            const previewElement = document.createElement(
              selectedFile.type.startsWith('image/') ? 'img' : 'div'
              );
              previewElement.src = result;
              previewElement.style.maxWidth = '100%';
              previewElement.style.maxHeight = '180px'
              containerRef.current.innerHTML = '';
              containerRef.current.appendChild(previewElement);
              if (selectedFile.type.startsWith('image/')) {
                imgRef.current.src = UploadDoneIcon;
                imgRefhover.current.style.display = 'none';
              }
          } else if (selectedFile.type === 'application/pdf') {
            containerRef.current.innerHTML = `<a href="${result}" download="${selectedFile.name}">Download ${selectedFile.name}</a>`;
          } else if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
  
            containerRef.current.innerHTML = `<a href="${result}" download="${selectedFile.name}">Download ${selectedFile.name}</a>`;
          } else if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
  
            containerRef.current.innerHTML = `<a href="${result}" download="${selectedFile.name}">Download ${selectedFile.name}</a>`;
          } else {
            containerRef.current.innerHTML = `<p>Preview not available for this file type.</p>`;
          }
        };
        reader.readAsDataURL(selectedFile);
        }
        else{
          containerRef.current.innerHTML = `<p>Drag and Drop <span className='text-highlighted'>${ highlightedText }</span> here or</p>`;
        }
    };

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
          handleFilePreview(files[0]);
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
      <div className='FC-hover' style={{ display: `${isSelected ? 'block' : ''}`}}>
      <img
      ref={imgRefhover}
      src={UploadIcon}
      className='FC-img'
      width='80px'
      height='80px'
      alt='Upload icon'
      />
      <div ref={containerRef}>
        <p>
          Drag and Drop <span className='text-highlighted'>{ highlightedText }</span> here or
        </p>
      </div>
      <input type='file' className='FC-input-file'onChange={handleFileSelect}
      ref={fileInputRef}
      style={{ display: 'none' }}
      />
      <div className='FC-buttons'>
        <button className='FC-openbtn' onClick={openFileFunction} >Select</button>
        <button className='FC-uploadbtn' onClick={uploadFile} disabled={isDisable}>Upload</button>
      </div>
      </div>

      <div className='FC-front' style={{ display: `${isSelected ? 'none' : ''}`}}>
        <img
          ref={imgRef}
          src={isUploaded? UploadDoneIcon : UploadIcon}
          className='FC-img'
          width='80px'
          height='80px'
          alt='Upload icon'
        />
        <p className='text-highlighted'>{highlightedText}</p>
      </div>
    </div>
  );
};

export default FileContainer;
