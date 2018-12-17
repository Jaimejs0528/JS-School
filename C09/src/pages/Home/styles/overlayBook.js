import { colors } from '../../commonStyles/colors';
import { extendsStyles } from '../../commonStyles/extends';

export const stylesOverlay = {
  'overlay-container': {
    color: colors['base-white'],
    position: 'relative',

    'overlay-summary': {
      position: 'fixed',
    },
  },
  
  'overlay-img': {
    extend: extendsStyles['border-overlay'],
    bottom: 0,
    height: 250,
    left: 0,
    opacity: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transition: ['opacity', '0.5s'],
    width: 176,
  
    'rating': {
      bottom: '5.6%',
      color: colors['yellow-stars'],
      height: 13,
      margin: [0, 'auto'],
      position: 'absolute',
      right: '28%',
    },
  
    '> span': {
      bottom: '12.8%',
      fontFamily: ['PlutoSansCondMedium', 'sans-serif'],
      fontSize: '.7rem',
      lineHeight: 15,
      position: 'absolute',
      right: '26.7%',
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase',
    }
  },
  
  'show-summary': {
    display: ['block', '!important'],
    opacity: [.75, '!important'],
    zIndex: 2,
  
    '> svg': {
      fontSize: '1.1rem',
      position: 'absolute',
      right: 12,
      top: 6,
  
      '&:hover': {
        fontSize: '1.2rem',
        color: colors['soft-blue'],
      }
    }
  },
  
  'overlay-summary': {
    extend: extendsStyles['border-overlay'],
    color: colors['accent-white'],
    display: 'none',
    height: '22.375rem',
    left: 'calc(50% - (23.8rem/2))',
    opacity: 0,
    position: 'absolute',
    top: '22.5vh',
    transition: ['opacity', '.2s'],
    width: '23.8rem',
  
    '@media screen and (max-width:480px)':{
      left: 'calc(50% - (80vw/2))',
      width: '80vw',
    },
  
    '@media screen and (max-width: 768px)':{
      top: '30vh',
      zIndex: 4,
    },
  
    '@media screen and (max-width: 1024px)': {
      left: 'calc(60% - (23.8rem/2))',
    }
  },

  'button-lend': {
    color: colors['black-medium'],
    backgroundColor: colors['soft-blue'],
    border: [colors['black-medium'], 'solid', 1],
    borderRadius: 5,
    bottom: '6%',
    fontFamily: ['PlutoSansCondMedium', 'sans-serif'],
    left: '10%',
    letterSpacing: 2,
    opacity: 1,
    outline: 'none',
    padding: ['.2rem', '1rem'],
    position: 'absolute',
    textTransform: 'uppercase',
    textAlign: 'center',
    zIndex: 3,
  
    '&:hover': {
      boxShadow: [colors['soft-blue'], 0, 0, 10],
      color: colors['base-white'],
    }
  },
  
  'datePicker': {
    bottom: '8%',
    right: '8%',
    letterSpacing: 2,
    opacity: 1,
    outline: 'none',
    position: 'absolute',
    zIndex: 3,
  },
  
  'summary-container': {
  extend: extendsStyles['flex-column'],
  bottom: 0,
    fontFamily: ['PlutoSansCondRegular', 'sans-serif'],
    left: 0,
    margin: '1.8rem',
    position: 'absolute',
    right: 0,
    top: 0,
  
    '& span': {
      color:colors['off-gray'],
      fontFamily: ['PlutoSansCondBold', 'sans-serif'],
      fontSize: '.75rem',
      height: '1.25rem',
      padding: [0, 0, 0, '.15rem'],
      textTransform: 'uppercase',
    }
  },
  
  'book-paragraph': {
    extend: extendsStyles['flex-column'],
    marginBottom: '1.5rem',
  },
  
  'book-summary-rating': {
    extend: extendsStyles['flex-column'],
    marginBottom: '1.3125rem',
  },
    
  'summary-paragraph': {
    fontSize: '.75rem',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 19,
    maxHeight: 19 * 5,
    overflow: 'hidden',
    padding: [0, '1rem', 0, 0],
    textAlign: 'left',
    textOverflow: 'ellipsis',
  },
  
  'header-summary': {
    extend: extendsStyles['flex-column'],
    fontSize: '.5417rem',
    justifyContent: 'space-between',
    margin: [0, 0, '1.25rem'],
    
  
    '>div': {
      extend:  extendsStyles['flex-row'],
      color: colors['soft-blue'],
      fontFamily: ['PlutoSansCondBold', 'sans-serif'],
      justifyContent: 'space-between',
      marginBottom: '-.7rem',
    },
  
    '& h1': {
      textTransform: 'uppercase',
    },
  
    '& h2': {
      margin: [0, 0, '.25rem'],
    },
  
    '& p': {
      fontSize: '.8125rem',
    },
  
    '& span': {
      fontSize: '.8125rem',
      margin: [0, 0, '.5rem'],
      textTransform: 'capitalize',
    },
  },
}

export default this;