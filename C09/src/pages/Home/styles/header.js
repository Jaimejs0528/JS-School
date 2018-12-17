/* eslint-disable import/no-unresolved */
import { colors } from 'commonStyles/colors';
import { extendsStyles } from 'commonStyles/extends'

export const stylesHeader = {
'header-container': {
    extend:  extendsStyles['flex-row'],
    background: colors['base-white'],
    borderBottom: [2, 'solid', colors['soft-blue']],
    height: '10vh',
    maxHeight: 80,
    minHeight: 70,
},

  // Header right side
'header-logo': {
  extend:  extendsStyles['flex-row'],
  background: colors['accent-white'],
  minWidth: 190,

  '& img': {
    margin: 'auto',
    transition: ['width', '1s'],
  },

  '@media screen and (max-width: 1024px)': {
    extend: extendsStyles['size-left-side'],
  },

  '@media screen and (max-width: 768px)':{
    minWidth: 80,
    width: 80,
  },

},

//  Header center
'header-search': {
  extend:  extendsStyles['flex-row'],
  flexBasis: '72vw',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  padding: ['.2rem', '1.4rem', 0],

  '@media screen and (max-width:480px)':{
    flexWrap: 'wrap',
    padding: [0, 'auto'],
  },
},

'title': {
  alignSelf: 'center',
  fontFamily: ['PlutoSansMedium', 'sans-serif'],
  fontSize: '1.5rem',
  lineHeight: 'normal',
  width: 'fit-content',
  transition: ['font-size', '0.5s'],

  '@media screen and (max-width:480px)': {
    flexBasis: '100%',
    fontSize: '1.2rem',
    order: 1,
  },
},

'input-search': {
  extend:  extendsStyles['flex-row'],
  alignSelf: 'center',
  background: colors['base-white'],
  border: [1, 'solid', colors['soft-blue']],
  borderRadius: '1rem',
  color: colors['main-black'],
  flexWrap: 'nowrap',
  fontFamily: ['PlutoSansRegular', 'sans-serif'],
  fontSize: '.85rem',
  height: '2.25rem',
  minWidth: 299,
  padding: '.6rem',
  width: '26.5%',
  transition: ['min-width', '1s'],

  '& svg':{
    '@media screen and (max-width:480px)': {
      margin: 'auto',
      paddingLeft: '0.3em',
    }
  },

  '@media screen and (max-width: 768px)': {
    minWidth: 160,
    height: '2rem',
    width: '45%',
  },

  '@media screen and (max-width:480px)': {
    order: 2,
    height: '1.5rem',
    flexBasis: '100%',
    minWidth: 100,
    padding: 0,
    marginBottom: 6,
  },
},

//DOESN'T WORK
'& input[type=\'search\']': {
  background: 'transparent',
  border: 0,
  fontSize: '.9rem',
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
  justifyContent: 'space-evenly',
  margin: ['auto', '0.7317vw'],
  position: 'relative',
  width: '100%',

  '@media screen and (max-width:480px)': {
    minWidth: 70,
  },

  '& h3': {
    fontFamily: ['PlutoSansCondRegular', 'sans-serif'],
    fontSize: '.875rem',
    margin: ['auto', 0],
    marginLeft: '0.14vw',
    width: '55%',
    textAlign: 'right',

  '@media screen and (max-width: 1024px)': {
      display: 'none',
    },
  },

  '& svg': {
    fontSize: '.75rem',
    margin: ['auto', 0],
    width: '7%',
    textAlign: 'right',
  },

  '& img': {
    border: [2, 'solid', colors['soft-blue']],
    height: '2.5rem',
    margin: ['auto', 0],
    maxHeight: 40,
    maxWidth: 40,
    marginLeft: '.65vw',
  },
},

'dropdown-logout': {
  display: 'none',
  boxShadow: [0, 8, 16, 0, 'rgba(0,0,0,0.2)'],
  background: colors['base-white'],
  left: '5%',
  position: 'absolute',
  top: '100%',
  width: 100,
  zIndex: 2,
  margin: [0, 'auto'],

  '& a': {
    fontSize: '.875rem',
    fontFamily: ['PlutoSansCondRegular', 'sans-serif'],
    color: colors['main-black'],
    textDecoration: 'none',
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
  borderLeft: [1, 'solid', colors['gray-base']],
  height: '65%',
  margin: ['.875rem', '.05rem'],
  width: 0,
},

}

export default this;