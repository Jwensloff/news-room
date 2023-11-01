import './ErrorPage.scss'

import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage({ error, setError }) {
  const navigate = useNavigate();
  if (error === '') {
    setError('404 page not found');
  }

  const handleExitBtn = () => {
    setError('');
    navigate('/');
  };

  return (
    <div className='error-page'>
      <div className='home-btn-wrapper'>
        <button className='exit-btn' onClick={() => handleExitBtn()}>
          X
        </button>
      </div>
      {error}
    </div>
  );
}

export default ErrorPage;
