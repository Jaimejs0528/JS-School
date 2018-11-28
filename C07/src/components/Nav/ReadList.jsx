import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Class that load all most read books list
class ReadList extends PureComponent {
  render() {
    const { lectures } = this.props;
    return (
      <ol className="aside-list">
        {lectures.map(item => <li className="hidde-overflow-text" key={item}>{item}</li>)}
      </ol>);
  }
}

// Props Validation
ReadList.propTypes = {
  lectures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReadList;
