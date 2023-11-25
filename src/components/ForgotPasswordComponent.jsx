// src/components/ForgotPasswordComponent.jsx

import React from 'react';
import forgotPasswordContent from '!html-loader!./forgot_password.html'; // Update with the correct path

const ForgotPasswordComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: forgotPasswordContent }} />
  );
};

export default ForgotPasswordComponent;