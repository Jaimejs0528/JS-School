import { colors } from '../../commonStyles/colors';
import { extendsStyles } from '../../commonStyles/extends';

export const stylesBookShelf = {
  'books-container': {
    background: colors['secondary-white'],
    overflowX: 'hidden',
    overflowY: 'scroll',
    width: '72vw',
  
    '@media screen and (max-width: 1024px)': {
      width: 'calc(100vw - 190px)',
    },

    '@media screen and (max-width: 768px)':{
      width: '100vw',
    },
  
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  
  'bookshelf': {
    extend: extendsStyles['flex-row'],
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    padding: [0, '5rem'],
  
  '@media screen and (max-width: 1024px)': {
      justifyContent: 'space-around',
    }
  },
  
  'book': {
    extend: extendsStyles['flex-column'],
    cursor: 'pointer',
    height: '20rem',
    justifyContent: 'space-between',
    marginBottom: '27%',
    width: 176,
  },
  
  'child': {
    extend: extendsStyles['flex-row'],
    color: colors['soft-blue'],
    fontSize: '1.5rem',
    height: '19.2%',
    margin: 'auto',
    position: 'absolute',
    right: '36%',
    bottom: '41.6%',
    width: '27.3%',
  },
  
  'book-options>div>svg': {
    margin: 'auto',
  },

  'img-container': {
    extend: extendsStyles['border-overlay'],
    height: 250,
    marginBottom: '.5rem',
    width: 176,
  
    '&:hover': {
      'overlay-img': {
        extend: extendsStyles['overlay-visible'],
      }
    }
  },
  
  'lend-book': {
    display: 'none',
    position: 'absolute',
    right: -10,
    top: 30,
  
    '& svg': {
      position: 'absolute',
      top: 6,
      left: 20,
    }
  },
  
  'img-border': {
    extend: extendsStyles['border-overlay'],
  },
  
  'book-title': {
    color: colors['black-medium'],
    fontFamily: ['PlutoSansCondMedium', 'sans-serif'],
    fontSize: '.9rem',
    textTransform: 'capitalize',
  },
  
  'cities': {
    extend: extendsStyles['bookInfo'],
    color: colors['gray-base'],
    textTransform: 'capitalize',
  },
  
  'author': {
    extend: extendsStyles['bookInfo'],
    color: colors['secondary-gray'],
    textTransform: 'capitalize',
  },
  
  'rating': {
    extend: extendsStyles['flex-row'],
    color: colors['soft-blue'],
    fontSize: 12.5,
    width: 76,
    fontFamily: ['PlutoSansCondLight', 'sans-serif'],
    letterSpacing: 1.2,
    textTransform: 'capitalize',
  
    '& svg': {
      height: 17,
      width: 20,
    },
  },
  
  'loading':{
    extend: extendsStyles['flex-row'],
  
    '& h1': {
      textAlign: 'center',
      width: '100%',
      padding: ['10%', 0],
      fontFamily: ['PlutoSansMedium', 'sans-serif'],
      'font-size': '3rem',
      textTransform: 'capitalize',
      color: colors['soft-blue'],
    
      // @include keyframe(loading ,2.5s linear infinite alternate) {
      //   0% {
      //     transform: scale(0.95);
      //     opacity: 0.6;
      //   }
      //   50% {
      //     transform: scale(1.1);
      //     opacity: 1;
      //   }
      //   100% {
      //     transform: scale(0.95);
      //     opacity: 0.6;
      //   }
      // }
    }
  },
  
  'error': {
    extend: extendsStyles['flex-row'],
  
    '& h1': {
      textAlign: 'center',
      width: '100%',
      padding: ['10%', 0],
      fontFamily: ['PlutoSansMedium', 'sans-serif'],
      fontSize: '3rem',
      textTransform: 'capitalize',
      color: colors['error'],
    }
  } 
}

export default this;