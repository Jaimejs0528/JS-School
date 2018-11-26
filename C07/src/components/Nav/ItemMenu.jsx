import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUserTag, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

// Get Icon to render by type.
const selectIcon = (type) => {
  // objetc with icons
  const optionsIcon = {
    city: <FontAwesomeIcon icon={faGlobe} />,
    loans: <FontAwesomeIcon icon={faUserTag} />,
    digital: <FontAwesomeIcon icon={faTabletAlt} />,
  };
  return optionsIcon[type]; // Return icon by type
};

// Class that contains all navigation options
class ItemName extends PureComponent {
  render() {
    const {
      itemName,
      type,
      selectedItem,
      changeSelected,
    } = this.props;
    // Elements to render
    return (
      <div className={`${(itemName === selectedItem) ? 'selected' : ''} menu-item`}>
        {selectIcon(type)}
        <button
          type="button"
          onClick={changeSelected.bind(this)}
        >
          {itemName}
        </button>
      </div>);
  }
}

// Props Validations
ItemName.propTypes = {
  itemName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
};

export default ItemName;
