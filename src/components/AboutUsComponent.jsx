// src/components/AboutUsComponent.jsx

import React from 'react';
import aboutUsContent from '!html-loader!./about_us.html'; // Update with the correct path


const AboutUsComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: aboutUsContent }} />
  );
};

export default AboutUsComponent;
