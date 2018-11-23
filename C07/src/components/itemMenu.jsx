import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Main extends PureComponent {
  render() {
    const optionsIcon = {
      city: <FontAwesomeIcon icon="globe" />,
      loans: <FontAwesomeIcon icon="user-tag" />,
      digital: <FontAwesomeIcon icon="tablet-alt" />,
    }
    const { itemName, type } = this.props;
    return (
      <div>
        {optionsIcon[type]}
        <a href="#">{itemName}</a>
      </div>);
  }
}