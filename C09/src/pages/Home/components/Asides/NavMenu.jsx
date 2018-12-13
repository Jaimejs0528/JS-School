/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemMenu from './ItemMenu';

// Contains all navigation options
class NavMenu extends Component {
  // Props Validations
  static propTypes = {
    menu: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeSelectedOption: PropTypes.func.isRequired,
    openMenuKeyBoard: PropTypes.func.isRequired,
    openMenu: PropTypes.func.isRequired,
    menuItemSelected: PropTypes.string.isRequired,
    openNavMenu: PropTypes.bool.isRequired,
  }

  // When must re-render
  shouldComponentUpdate(nextProps) {
    const { menuItemSelected, openNavMenu } = this.props;
    
    return (menuItemSelected !== nextProps.menuItemSelected ||
      openNavMenu !== nextProps.openNavMenu);
  }

  render() {
    const {
      menu,
      items,
      changeSelectedOption,
      menuItemSelected,
      openMenu,
      openMenuKeyBoard,
      openNavMenu,
    } = this.props;

    return (
      <nav className="sidebar left-side">
        <div
          onClick={openMenu}
          onKeyPress={openMenuKeyBoard}
          className="header-menu"
          role="button"
          tabIndex="0"
        >
          <h4 className="header-title">{menu}</h4>
          <div className={`list-header ${openNavMenu ? 'show' : ''}`}>
            <For each="item" of={items}>
              <ItemMenu
                key={item.name}
                itemName={item.name}
                type={item.type}
                match={item.path}
                selectedItem={menuItemSelected}
                changeSelected={changeSelectedOption}
              />
            </For>
          </div>
        </div>
      </nav>);
  }
}

export default NavMenu;
