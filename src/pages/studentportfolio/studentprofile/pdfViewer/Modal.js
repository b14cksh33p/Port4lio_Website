import React from 'react';
import Modal from 'react-modal';
import PDFViewer from './PDFViewer';

Modal.setAppElement('#root'); // Set the root element for accessibility

const CustomModal = ({ isOpen, closeModal, pdfUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="PDF Modal"
    >
      <button onClick={closeModal}>Close Modal</button>
      <PDFViewer pdfUrl={pdfUrl} />
    </Modal>
  );
};

export default CustomModal;