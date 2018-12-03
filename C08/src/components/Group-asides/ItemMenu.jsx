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
    } = this.props;
    const isCity = type === "city" ? true : false;
    const isLoans = type === "loans" ? true : false;
    
    // Elements to render
    return (
      <div className={`${(itemName === selectedItem) ? 'selected' : ''} menu-item`}>
        {this.selectIcon(type)}
        {/* <button
          type="button"
          onClick={changeSelected.bind(this)}
        > 
        {itemName}
         </button>*/}
        <Link
          to={match}
          className="Link"
          onClick={changeSelected.bind(this)}>
          {itemName}
        </Link>    
      </div>);
  }
}

export default ItemName;
