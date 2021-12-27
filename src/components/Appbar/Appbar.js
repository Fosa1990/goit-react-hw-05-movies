import React from 'react';
import Navigation from '../Navigation';
import './Appbar.css';
function Appbar() {
  return (
    <header className="header">
      <Navigation />
    </header>
  );
}
export default React.memo(Appbar);
