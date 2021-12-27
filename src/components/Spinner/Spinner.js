import React from 'react';
import Loader from 'react-loader-spinner';
import './Spinner.css';
export default function Spinner() {
  return (
    <div className="loader-box">
      <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={12000}
      />
    </div>
  );
}
