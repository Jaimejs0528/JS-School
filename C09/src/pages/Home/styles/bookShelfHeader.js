import { colors } from '../../commonStyles/colors';
import { extendsStyles } from '../../commonStyles/extends';

export const stylesBookShelfHeader = {
  'books-header': {
    extend: extendsStyles['flex-row'],
    alignContent: 'center',
    background: colors['secondary-white'],
    color: colors['off-gray'],
    flexWrap: 'nowrap',
    fontFamily: ['PlutoSansCondRegular', 'sans-serif'],
    height: '5.066rem',
    justifyContent: 'space-between',
    padding: ['1.875rem', '4.938rem', '1.69rem', '5.063rem'],
    position: 'sticky',
    top: 0,
    zIndex: 3,
  
    '@media screen and (max-width:480px)': {
      height: '6rem',
      padding: [0, '21.8vw'],
      flexWrap: 'wrap',
    },
  
    '@media screen and (max-width:320px)': {
      padding: ['3vh', '21.8vw'],
    }
  },
  
  'books-header-title': {
    color: colors['secondary-black'],
    fontFamily: ['PlutoSansCondLight', 'sans-serif'],
    fontSize: '1.25rem',
    textAlign: 'left',
  
    '@media screen and (max-width:480px)': {
      order: 1,
      textAlign: 'center',
      width: '100%',
      marginBottom: '1vh',
    }
  },
  
  'books-pagination': {
    '& a': {
      background: colors['soft-blue'],
      borderRadius: 8, 
      fontSize: '1.2rem',
      textDecoration: 'none',
      color: colors['accent-white'],
      padding: ['.1rem', '.4rem'],
    },

    '& span': {
      position: 'relative',
      top: '-3',
      margin: [0, '.5rem'],
    },
  
    '@media screen and (max-width:480px)': {
      order: 2,
      textAlign: 'center',
      width: '100%',
      marginBottom: '1vh',
    }
  },
  
  'view-books': {
    extend: extendsStyles['flex-row'],
    color: colors['soft-blue'],
    fontSize: '1.2rem',
    justifyContent: 'space-between',
    width: '2.8rem',
  
    '& svg:hover': {
      textShadow: [colors['main-black'], 0, 0, 3],
    },
  
    '@media screen and (max-width:480px)': {
      order: 3,
      fontSize: '1rem',
      width: '2.3rem',
      flexGrow: 1,
      justifyContent: 'space-evenly',
      marginBottom: '1vh',
    },
  },
}

export default this;