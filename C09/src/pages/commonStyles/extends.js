import { colors } from "./colors";

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
  'size-left-side': {
    minWidth: 190,
    width: '22.5vw',
  },
  'border-overlay': {
    backgroundColor: colors['main-black'],
    border: [1, 'solid', colors['main-black']],
    borderRadius: 5,
  },
  'overlay-visible': {
    display: 'block',
    opacity: .75,
    zIndex: 2,
  },
  'bookInfo': {
    fontFamily: ['PlutoSansCondLight', 'sans-serif'],
    fontSize: '.813rem',
    padding: ['.1rem', 0],
  },
  'center-element': {
    padding: 0,
    margin: 'auto',
    textAlign: 'center',
  }
}

export default this;