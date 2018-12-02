import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReadList from './ReadList';

// Aside right container
class MostRead extends PureComponent {
  // Props Validations
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  render() {
    const { title, items } = this.props;
    return (
      <aside className="sidebar right-side">
        <h4 className="aside-title">{title}</h4>
        <ReadList lectures={items} />
      </aside>);
  }
}

export default MostRead;
