import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stepstack() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(true);

  const handleLinkClick = (path) => {
    setShowButtons(false);
    navigate(path);
  };

  const handleGoBack = () => {
    setShowButtons(true);
    navigate(-1);
  };

  return (
    <div>
      {showButtons && (
        <>
          <button style={{border:"none"}} className='Aq' onClick={() => handleLinkClick('/step-page/Aq')}>
          </button>
          <button style={{border:"none"}} className='step1' onClick={() => handleLinkClick('/step-page/step-1')}>
          </button>
          <button style={{border:"none"}} className='step2' onClick={() => handleLinkClick('/step-page/step-2')}>
          </button>
          <button style={{border:"none"}} className='step3' onClick={() => handleLinkClick('/step-page/step-3')}>
          </button>
        </>
      )}
      {!showButtons && (
        <img className='backbtn' style={{width:"10.5px", height:"21px"}} onClick={handleGoBack}>
        </img>
      )}
    </div>
  );
}