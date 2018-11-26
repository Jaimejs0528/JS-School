import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Class to display icons
function ViewMode() {
  return (
    <div className="view-books">
      <FontAwesomeIcon icon="th-large" />
      <FontAwesomeIcon icon="th-list" />
    </div>);
}

export default ViewMode;
