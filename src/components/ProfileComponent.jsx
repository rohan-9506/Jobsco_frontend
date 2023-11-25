// src/components/ProfileComponent.jsx

import React from 'react';
import profileContent from '!html-loader!./profile.html'; // Update with the correct path

const ProfileComponent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: profileContent }} />
  );
};

export default ProfileComponent;