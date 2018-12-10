export const extendsStyles = {
  'flex-row': {
    display: 'flex',
    fallbacks: [
      { display: '-o-flex' },
      { display: '-ms-flexbox' },
      { display: '-webkit-flex' },
      { display: '-moz-flex' },
    ],
  },
  'flex-column': {
    display: 'flex',
    'flex-direction': 'column',
    fallbacks: [
      { display: '-o-flex' },
      { display: '-ms-flexbox' },
      { display: '-webkit-flex' },
      { display: '-moz-flex' },
      {'-webkit-flex-direction': 'column'},
      {'-ms-flex-direction': 'column'},
    ],
  },
}

export default this;