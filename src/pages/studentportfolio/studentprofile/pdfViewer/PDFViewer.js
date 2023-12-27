import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <Document file={'https://firebasestorage.googleapis.com/v0/b/port4lio-website.appspot.com/o/students_files%2FRod%20Rod%20Rod%2FRod%20Rod%20Rod%20-%20Waiver?alt=media&token=4f470eb0-ad5d-4c2b-90e1-0649b29f6d2d'}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;