import React, { PureComponent } from 'react';

class OVerlayBookContainer extends PureComponent {
  render() {
    return (
      <div>
        <Book />
        <OverlaySummary />
      </div>
    );
  }
}

export default OVerlayBookContainer;
