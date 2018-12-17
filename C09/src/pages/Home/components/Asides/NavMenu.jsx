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
    classes: PropTypes.object.isRequired,
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
      classes
    } = this.props;

    return (
      <nav className={`sidebar ${classes['left-side']}`}>
        <div
          onClick={openMenu}
          onKeyPress={openMenuKeyBoard}
          className={classes['header-menu']}
          role="button"
          tabIndex="0"
        >
          <h4 className={classes['header-title']}>{menu}</h4>
          <div className={`${classes['list-header']} ${openNavMenu ? classes.show : ''}`}>
            <For each="item" of={items}>
              <ItemMenu
                key={item.name}
                itemName={item.name}
                type={item.type}
                match={item.path}
                selectedItem={menuItemSelected}
                changeSelected={changeSelectedOption}
                classes={classes}
              />
            </For>
          </div>
        </div>
      </nav>);
  }
}

export default NavMenu;
