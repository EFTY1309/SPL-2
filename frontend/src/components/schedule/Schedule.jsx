import React, { useRef } from 'react';
import './Schedule.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Schedule = () => {
  const scheduleRef = useRef();

  const downloadAsPDF = () => {
    const input = scheduleRef.current;
    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('DU-Swimming-Pool-Schedule.pdf');
      })
      .catch(err => console.error('Error generating PDF:', err));
  };

  const downloadAsPNG = () => {
    const input = scheduleRef.current;
    html2canvas(input)
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
          <img src="../../../public/images/DU-Swimming-Pool-Schedule.jpg" alt="Schedule" className="schedule-image" />
        </div>
        <div className="download-buttons">
          <button className="download-btn" onClick={downloadAsPDF}>Download as PDF</button>
          <button className="download-btn" onClick={downloadAsPNG}>Download as PNG</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
