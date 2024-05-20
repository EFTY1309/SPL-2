import React, { useRef } from 'react';
import './Schedule.css';
import Button3 from '../buttons/Button3';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Schedule = () => {
  const scheduleRef = useRef();

  const downloadAsPDF = () => {
    const input = scheduleRef.current;
    html2canvas(input, { scale: 2 }) // Increase scale for better quality
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // Create PDF in A4 size
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('DU-Swimming-Pool-Schedule.pdf');
      })
      .catch(err => console.error('Error generating PDF:', err));
  };

  const downloadAsPNG = () => {
    const input = scheduleRef.current;
    html2canvas(input, { scale: 2 }) // Increase scale for better quality
      .then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'DU-Swimming-Pool-Schedule.png';
        link.click();
      })
      .catch(err => console.error('Error generating PNG:', err));
  };

  return (
    <div className="schedule-page">
      <div className="schedule-container">
        <h1>Swimming Schedule</h1>
        <div ref={scheduleRef} className="schedule-image-container">
          <img src="/images/DU-Swimming-Pool-Schedule.jpg" alt="Schedule" className="schedule-image" />
        </div>
        <div className="download-buttons">
          <Button3 text="Download as PDF" to="#" className="download-btn" onClick={downloadAsPDF} />
          <Button3 text="Download as PNG" to="#" className="download-btn" onClick={downloadAsPNG} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
