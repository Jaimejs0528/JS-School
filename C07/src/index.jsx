import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import HeaderComp from './components/header';

library.add(faSearch);
library.add(faAngleDown);

class App extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div>
        <HeaderComp />
      </div>);
  }
}

const whatRender = <App />;
const whereRender = document.querySelector('#root-App');
ReactDom.render(whatRender, whereRender);
