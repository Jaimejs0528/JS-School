import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemMenu from './ItemMenu';

// Contains all navigation options
class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      open: true,
    };
    this.changeSelected = this.changeSelected.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  // Change the navigation option
  changeSelected(event) {
    const { getOptionSelected } = this.props;
    this.setState({ selected: event.target.textContent });
    getOptionSelected(event.target.textContent);
  }

  // Open navigation menu
  openMenu() {
    this.setState(previous => ({ open: !previous.open }));
  }

  render() {
    const { menu, items } = this.props;
    const { selected, open } = this.state;
    return (
      <nav className="sidebar left-side">
        <div onClick={this.openMenu} className="header-menu">
          <h4 className="header-title">{menu}</h4>
          <div className={`list-header ${open ? 'show' : ''}`}>
            {items.map(item => (
              <ItemMenu
                key={item}
                itemName={item[0]}
                type={item[1]}
                selectedItem={selected}
                changeSelected={this.changeSelected}
              />
            ))}
          </div>
        </div>
      </nav>);
  }
}

// Props Validations
NavMenu.propTypes = {
  menu: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  getOptionSelected: PropTypes.func.isRequired,
};

export default NavMenu;
