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

class ItemName extends PureComponent {
  render() {
    const {
      itemName,
      type,
      selectedItem,
      changeSelected,
    } = this.props;
    const style = {
      background: '#0F0',
    };
    // Elements to render
    return (
      <div>
        {selectIcon(type)}
        <button
          type="button"
          style={(selectedItem === itemName) ? style : null}
          onClick={changeSelected.bind(this)}
        >
          {itemName}
        </button>
      </div>);
  }
}

ItemName.propTypes = {
  itemName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
};

export default ItemName;
