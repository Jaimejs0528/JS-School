import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReadList from './readList';

class MostRead extends PureComponent {
  render() {
    const { title, items } = this.props;
    return (
      <aside>
        <h4>{title}</h4>
        <ReadList lectures={items} />
      </aside>);
  }
}

MostRead.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MostRead;
