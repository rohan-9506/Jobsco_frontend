// src/components/ContactUsComponent.jsx

import React from 'react';
import contactUsContent from '!html-loader!./contact_us.html'; // Update with the correct path

const ContactUsComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: contactUsContent }} />
  );
};

export default ContactUsComponent;