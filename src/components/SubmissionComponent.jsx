// src/components/SubmissionComponent.jsx

import React from 'react';
import submissionContent from '!html-loader!./submission.html'; // Update with the correct path

const SubmissionComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: submissionContent }} />
  );
};

export default SubmissionComponent;