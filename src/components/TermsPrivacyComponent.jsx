// src/components/TermsPrivacyComponent.jsx

import React from 'react';
import termsPrivacyContent from '!html-loader!./terms_privacy.html'; // Update with the correct path

const TermsPrivacyComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: termsPrivacyContent }} />
  );
};

export default TermsPrivacyComponent;