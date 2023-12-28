import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pdfUrl = '/pdfs/pdf-file.pdf'; // Adjust the path to match your file structure

  return (
    <div>
      <div>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfUrl} onOpenSuccess={onDocumentLoadSuccess} />
        </Worker>
      </div>
      <p>Page {numPages} of {numPages}</p>
    </div>
  );
};

export default PDFViewer;