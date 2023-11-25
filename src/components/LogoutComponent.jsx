// src/components/HTMLFileComponent.jsx

import React from 'react';
import htmlContent from '!html-loader!./logout.html'; // Update with the correct path
import "./index.css"

const LogoutComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default LogoutComponent;
