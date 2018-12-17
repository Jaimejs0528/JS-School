/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUserTag, faTabletAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Class that contains all navigation options
class ItemName extends PureComponent {
  // Props Validations
  static propTypes = {
    itemName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    selectedItem: PropTypes.string.isRequired,
    changeSelected: PropTypes.func.isRequired,
    match: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  // Get Icon to render by type.
  selectIcon = (type) => {
    // Object with icons
    const optionsIcon = {
      home: <FontAwesomeIcon icon={faHome} />,
      city: <FontAwesomeIcon icon={faGlobe} />,
      loans: <FontAwesomeIcon icon={faUserTag} />,
      digital: <FontAwesomeIcon icon={faTabletAlt} />,
    };
    return optionsIcon[type]; // Return icon by type
  }

  render() {
    const {
      itemName,
      type,
      selectedItem,
      changeSelected,
      match,
      classes,
    } = this.props;

    // Elements to render
    return (
      <div className={`${(itemName === selectedItem) ? classes.selected : ''} ${classes['menu-item']}`}>
        {this.selectIcon(type)}
        <Link
          to={`${match}/?page=1`}
          className={classes.Link}
          onClick={changeSelected}
        >
          {itemName}
        </Link>    
      </div>);
  }
}

export default ItemName;
