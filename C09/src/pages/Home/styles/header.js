/* eslint-disable import/no-unresolved */
import { colors } from 'commonStyles/colors';
import { extendsStyles } from 'commonStyles/extends'

export const stylesHeader = {
 'header-container': {
    extend:  extendsStyles['flex-row'],
    background: colors['base-white'],
    'border-bottom': [2, 'solid', colors['soft-blue']],
    height: '10vh',
    'max-height': 80,
    'min-height': 70,
  },

  // Header right side
 'header-logo': {
  extend:  extendsStyles['flex-row'],
  background: colors['accent-white'],
  'min-width': 190,

  '& img': {
    margin: 'auto',
    transition: ['width', '1s'],
  },

  '@media screen and (max-width: 768px)':{
    'min-width': 80,
    width: 80,
  },

  '@media screen and (max-width: 1024px)': {
    extend: extendsStyles['size-left-side'],
  },

},

//  Header center
'header-search': {
  extend:  extendsStyles['flex-row'],
  'flex-basis': '72vw',
  'flex-wrap': 'nowrap',
  'justify-content': 'space-between',
  padding: ['.2rem', '1.4rem', 0],

  '@media screen and (max-width:480px)':{
    'flex-wrap': 'wrap',
    padding: [0, 'auto'],
  },
},

'title': {
  'align-self': 'center',
  'font-family': ['PlutoSansMedium', 'sans-serif'],
  'font-size': '1.5rem',
  'line-height': 'normal',
  width: 'fit-content',
  transition: ['font-size', '0.5s'],

  '@media screen and (max-width:480px)': {
    'flex-basis': '100%',
    'font-size': '1.2rem',
    order: 1,
  },
},

'input-search': {
  extend:  extendsStyles['flex-row'],
  'align-self': 'center',
  background: colors['base-white'],
  border: [1, 'solid', colors['soft-blue']],
  'border-radius': '1rem',
  color: colors['main-black'],
  'flex-wrap': 'nowrap',
  'font-family': ['PlutoSansRegular', 'sans-serif'],
  'font-size': '.85rem',
  height: '2.25rem',
  'min-width': 299,
  padding: '.6rem',
  width: '26.5%',
  transition: ['min-width', '1s'],

  '& svg':{
    '@media screen and (max-width:480px)': {
      margin: 'auto',
      'padding-left': '0.3em',
    }
  },

  '@media screen and (max-width: 768px)': {
    'min-width': 160,
    height: '2rem',
    width: '45%',
  },

  '@media screen and (max-width:480px)': {
    order: 2,
    height: '1.5rem',
    'flex-basis': '100%',
    'min-width': 100,
    padding: 0,
    'margin-bottom': 6,
  },
},

//DOESN'T WORK
'& input[type=\'search\']': {
  background: 'transparent',
  border: 0,
  'font-size': '.9rem',
  margin: [0, 'auto'],
  outline: 'none',
  width: '90%',

  '&::placeholder': {
    color: colors['main-black'],
  },
},


// Header left side
'header-profile': {
  extend:  extendsStyles['flex-row'],
  background: colors['base-white'],
},

'profile': {
  extend:  extendsStyles['flex-row'],
  height: 'fit-content',
  'justify-content': 'space-evenly',
  margin: ['auto', '0.7317vw'],
  position: 'relative',
  width: '100%',

  '@media screen and (max-width:480px)': {
    'min-width': 70,
  },

  '& h3': {
    'font-family': ['PlutoSansCondRegular', 'sans-serif'],
    'font-size': '.875rem',
    margin: ['auto', 0],
    'margin-left': '0.14vw',
    width: '55%',
    'text-align': 'right',

   '@media screen and (max-width: 1024px)': {
      display: 'none',
    },
  },

  '& svg': {
    'font-size': '.75rem',
    margin: ['auto', 0],
    width: '7%',
    'text-align': 'right',
  },

  '& img': {
    border: [2, 'solid', colors['soft-blue']],
    height: '2.5rem',
    margin: ['auto', 0],
    'max-height': 40,
    'max-width': 40,
    'margin-left': '.65vw',
  },
},

'dropdown-logout': {
  display: 'none',
  'box-shadow': [0, 8, 16, 0, 'rgba(0,0,0,0.2)'],
  background: colors['base-white'],
  left: '5%',
  position: 'absolute',
  top: '100%',
  width: 100,
  'z-index': 2,
  margin: [0, 'auto'],

  '& a': {
    'font-size': '.875rem',
    'font-family': ['PlutoSansCondRegular', 'sans-serif'],
    color: colors['main-black'],
    'text-decoration': 'none',
  },

  '&:hover': {
    background: colors['soft-blue'],

    '& a': {
      color: colors['base-white'],
    },
  },
},

'show': {
  display: 'block',
},

'vertical-line': {
  'border-left': [1, 'solid', colors['gray-base']],
  height: '65%',
  margin: ['.875rem', '.05rem'],
  width: 0,
},

}

export default this;