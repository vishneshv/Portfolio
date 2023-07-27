import './styles/Certificates.css';


import { useState } from 'react';

import c1 from './images/certificates/c1.png'
import c2 from './images/certificates/c2.png'
import c3 from './images/certificates/c3.png'
import c4 from './images/certificates/c4.png'
import c5 from './images/certificates/c5.png'
import c6 from './images/certificates/c6.png'
import c7 from './images/certificates/c7.png'
import c8 from './images/certificates/c8.png'
import c9 from './images/certificates/c9.png'

function Certificates() {

    const meritCertificate= [
      {
        icon : c9,
      name : "Nptel Data Science"
    },
    {
      icon : c2,
      name : "KPMG Data analytics"
    },
    {
      icon : c3,
      name : "Freedom with AI"
    },
    {
      icon : c4,
      name : "Devtown Python Data anlysis"
    },
    {
      icon : c5,
      name : "Python Programming"
    },
    {
      icon : c6,
      name : "Oracle Java fundamentals"
    },
    {
      icon : c7,
      name : "Devtown Webdevelopment"
    },
    {
      icon : c8,
      name : "Goldmansachs virtual program"
    },
    {
      icon : c1,
      name : "Accenture AI"
    },

    ]
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const handleCertificateClick = (certificate, index) => {
        setSelectedCertificate(certificate);
        setCurrentIndex(index);
      };
    
      const closeExpandedCertificate = () => {
        setSelectedCertificate(null);
        setCurrentIndex(null);
      };
    
    
    
      return (
        <div className="background">
          <div className="certificateTop"></div>
          <div className="bg-black text-white">
            <h3 className="text-center titles">Certificates</h3>
            <div className="container my-5">
              <div className="row justify-content-around">
                {meritCertificate.map((certificate, index) => (
                  <div
                    key={index}
                    className={`col-10 col-md-5 col-lg-5 text-center eachMeritCertificate ${
                      selectedCertificate === certificate ? 'expanded' : ''
                    }`}
                    onClick={() => handleCertificateClick(certificate, index)}
                  >
                    <img src={certificate.icon} width="100%" alt="Certificate" />
                    <p className="mt-4 mb-0">{certificate.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          
          {selectedCertificate && (
            <div className="expanded" onClick={closeExpandedCertificate}>
              <button className="closeButton" onClick={closeExpandedCertificate}>
                X
              </button>
              <img src={selectedCertificate.icon} alt="Expanded Certificate" />
            </div>
          )}
        </div>
      );
    }
    
    export default Certificates;