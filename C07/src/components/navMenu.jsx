import React, { PureComponent } from 'react';

import ItemMenu from './itemMenu';

class Main extends PureComponent {
  render() {
    const { menu, items } = this.props;
    return (
      <nav>
        <h2>{menu}</h2>
        {items.map(item => <ItemMenu itemName={item} />)}
      </nav>);
  }
}
