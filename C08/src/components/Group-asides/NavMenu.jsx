/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_HOME } from 'utils/constants';
import ItemMenu from './ItemMenu';

// Contains all navigation options
class NavMenu extends Component {
  // Props Validations
  static propTypes = {
    menu: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    getOptionSelected: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: DEFAULT_HOME,
      open: true,
    };
  }
  
  // When must re-render
  shouldComponentUpdate(nextState) {
    const { selected, open } = this.state;
    
    return (selected !== nextState.selected) ||
      (open !== nextState.open);
  }

  // Change the navigation option
  changeSelected = (event) => {
    const { getOptionSelected } = this.props;
    this.setState({ selected: event.target.textContent });
    getOptionSelected(event.target.textContent);
  }

  // Open navigation menu
  openMenu = () => {
    this.setState(previous => ({ open: !previous.open }));
  }

  // Open navigation menu using space key
  openMenuKeyBoard = (e) => {
    if(e.which === 32 || e.keyCode === 32) this.setState(previous => ({ open: !previous.open }));
  }

  render() {
    const { menu, items} = this.props;
    const { selected, open } = this.state;
    
    return (
      <nav className="sidebar left-side">
        <div
          onClick={this.openMenu}
          onKeyPress={this.openMenuKeyBoard}
          className="header-menu"
          role="button"
          tabIndex="0"
        >
          <h4 className="header-title">{menu}</h4>
          <div className={`list-header ${open ? 'show' : ''}`}>
            <For each="item" of={items}>
              <ItemMenu
                key={item.name}
                itemName={item.name}
                type={item.type}
                match={item.path}
                selectedItem={selected}
                changeSelected={this.changeSelected}
              />
            </For>
          </div>
        </div>
      </nav>);
  }
}

export default NavMenu;
