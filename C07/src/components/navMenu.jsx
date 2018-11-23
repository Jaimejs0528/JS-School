import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemMenu from './itemMenu';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(event) {
    this.setState({ selected: event.target.textContent });
  }

  render() {
    const { menu, items } = this.props;
    const { selected } = this.state;
    return (
      <nav>
        <h4>{menu}</h4>
        {items.map(item => (
          <ItemMenu
            key={item}
            itemName={item[0]}
            type={item[1]}
            selectedItem={selected}
            changeSelected={this.changeSelected}
          />
        ))}
      </nav>);
  }
}

NavMenu.propTypes = {
  menu: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default NavMenu;
