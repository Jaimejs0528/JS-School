/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReadList from './ReadList';

// Aside right container
class MostRead extends PureComponent {
  // Props Validations
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { title, items, classes } = this.props;
    
    return (
      <aside className={`sidebar ${classes['right-side']}`}>
        <h4 className={classes['aside-title']}>{title}</h4>
        <ReadList classes={classes} lectures={items} />
      </aside>);
  }
}

export default MostRead;
