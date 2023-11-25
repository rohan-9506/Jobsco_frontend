// src/components/JobListingsComponent.jsx

import React from 'react';
import jobListingsContent from '!html-loader!./job_listings.html'; // Update with the correct path

const JobListingsComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: jobListingsContent }} />
  );
};

export default JobListingsComponent;