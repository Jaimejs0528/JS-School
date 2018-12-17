import { colors } from '../../commonStyles/colors';
import { extendsStyles } from '../../commonStyles/extends';

export const stylesNavMenu = {
  'left-side': {
    background: colors['secondary-black'],
    color: colors['soft-blue'],
    minWidth: 190,
  
    '@media screen and (max-width: 1024px)': {
      extend: extendsStyles['size-left-side'],
    },

    '@media screen and (max-width: 768px)':{
      width: '100vw',
      flexBasis: 'unset',
    },
  },

  'header-menu': {
    extend: extendsStyles['flex-column'],
    fontFamily: ['PlutoSansCondBold', 'sans-serif'],
  
    '@media screen and (max-width: 768px)':{
      borderBottom: [colors['gray-base'], 'solid', 1],
    },
  },
  
  'header-title': {
    color: colors['accent-white'],
    fontSize: '.8rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
  
    '@media screen and (max-width: 768px)':{
      extend: extendsStyles['center-element'],
      padding: ['.5rem', 0],
    },
  
    '@media screen and (min-width: 769px)': {
      padding: ['2.25rem', 0, '.5rem', '2.5rem'],
    },
  },
  
  'list-header': {
    extend: extendsStyles['flex-column'],

    '@media screen and (max-width: 768px)':{
      extend: extendsStyles['center-element'],
      display: 'none',
    },

    '@media screen and (min-width: 769px)': {
      padding: ['.75rem', '2.5625rem', 0, '2.5625rem'],
      justifyContent: 'space-between',
    },
  },

  'show': {
    display: 'block',
  },
  
  'menu-item': {
    extend: extendsStyles['flex-row'],
    cursor: 'pointer',
    marginBottom: '1.25rem',  
  
    // Doesn't work
    // '&:hover': {
    //   filter: 'drop-shadow(colors[\'base-white\'] 0px 0px 4px)',
    // },
  
    '& svg': {
      width: '20%',
  
      '@media screen and (max-width: 768px)': {
        margin: ['auto', 0],
        fontSize: '.8em',
      },
    },
  
    '& a': {
      border: 0,
      background: 'none',
      color: colors['soft-blue'],
      fontFamily: ['PlutoSansCondRegular', 'sans-serif'],
      fontSize: '.9rem',
      outline: 'none',
      textAlign: 'left',
      textDecoration: 'none',
      width: '70%',
      marginLeft: '.6rem',
  
      '@media screen and (max-width: 768px)': {
        width: 'initial',
      },
    },
  
    '@media screen and (max-width: 768px)': {
      marginBottom:  '.375rem',
      width: '35vw',
    },
  },
  
  'selected': {
    color: colors['base-white'],
  
    // Doesn't work
      // '&:hover': {
      //   filter: 'drop-shadow(colors[\'base-white\'] 0px 0px 4px)',
      // },
  
    '& a': {
      color: colors['base-white'],
    }
  }
  
}

export const stylesAside = {
  'right-side': {
    extend: extendsStyles['flex-column'],
    background: colors['secondary-black'],
    color: colors['accent-gray'],
  
    '@media screen and (max-width: 1024px)': {
      display: 'none',
    },
  },
  
  'aside-title': {
    fontFamily: ['PlutoSansCondBold', 'sans-serif'],
    fontSize: '.813rem',
    mixBlendMode: 'normal',
    opacity: .7,
    padding: ['2.315rem', 0, '1.63rem', '2.25rem'],
    textTransform: 'uppercase',
  },
  
  'aside-list': {
    extend: extendsStyles['flex-column'],
    padding: [0, 0, 0, '2.125rem'],
  
    '& li': {
      fontFamily: ['PlutoSansCondLight', 'sans-serif'],
      fontSize: '.8rem',
      listStylePosition: 'inside',
      marginBottom: '1.63rem',
      maxWidth: '10.793vw',
    },
  },
  
}

export default this;