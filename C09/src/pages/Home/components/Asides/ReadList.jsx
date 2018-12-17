import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Class that load all most read books list
class ReadList extends PureComponent {
  // Props Validation
  static propTypes = {
    lectures: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { lectures, classes } = this.props;
    
    return (
      <ol className={classes['aside-list']}>
        <For each="item" of={lectures}>
          <li className="hide-overflow-text" key={item}>{item}</li>
        </For>
      </ol>);
  }
}

export default ReadList;
