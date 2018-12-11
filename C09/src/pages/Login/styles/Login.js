/* eslint-disable import/no-unresolved */
import { colors } from 'commonStyles/colors';
import { extendsStyles } from 'commonStyles/extends';

export const styles = {
  container: {
    extend: extendsStyles['flex-row'],
    'align-items': 'center',
    background: colors["black-medium"],
    'justify-content': 'center',
    height: '100vh',
  },
  loginContainer: {
    extend: extendsStyles['flex-column'],
    background: colors['base-white'],
    border: [colors['gray-base'], 'solid', '3'],
    'border-radius': 10,
    width: '50vw',
    'min-width': 330,
    'box-shadow':[ colors['soft-blue'], 0, 0, 20, 1],
    padding: ['5vh', '5vw'],
    transition: ['all', '.3s', 'ease-out'],
  
    '& img':{
      margin: [0, 'auto'],
      'margin-bottom': '5vh',
      width: 178,
      height: 47,
    },

    '@media screen and (max-width: 768px)':{
      'min-width': 'unset',
      width: '90vw',
    },

    '@media screen and (orientation: landscape ) and (max-height: 480px)': {
      height: '90vh',
      width: '90vw',
  
      '& img': {
        'margin-bottom': '2vh',
      }
    }
  }
};

export const stylesFields = {
  fieldContainer: {
    extend: extendsStyles['flex-column'],
    'font-family': 'PlutoSansCondMedium',
    'min-height': 75,
    height: '10vh',
  
    '& svg':{
      color: colors['soft-blue'],
      'font-size': '1.4rem',
    },
  
    '& label':{
      'font-size': '1.3rem',
      'font-weight': 'bold',
      color: colors['black-medium'],
      'text-transform': 'capitalize',
      'letter-spacing': .8,
    },
  },

  input: {
    extend: extendsStyles['flex-row'],
    'align-items': 'center',
    'flex-wrap': 'nowrap',
    'margin-top': '1rem',
    
    '& input':{
      width: '100%',
      'margin-left': '.6em',
      padding: '.5em',
      'border-radius': 10,
      outline: 'none',
      border: [colors['gray-base'], 'solid', 1],
  
      '&:hover':{
        'box-shadow': [colors['soft-blue'], 0, 0, 10, 1],
      },
  
      '&:focus':{
        border: [colors['soft-blue'], 'solid', 1],
      },
    }
  },

  error: {
    '& span':{
      color: colors['red-error'],
      'font-size': '.85rem',
      'padding-top': '.5rem',
      'font-family': 'PlutoSansCondBold',
  
      '@media screen and (orientation: landscape ) and (max-height: 480px)': {
        'text-align': 'right',
      },
    },
    '& svg': {
      color: colors['red-error'],
    },
  
    '& input': {
      border: [colors['red-error'], 'solid', 1],
  
      '&:hover': {
        'box-shadow': [colors['red-error'], 0, 0, 10, 1],
      }
    },
  }
}

export const stylesForm = {
  error: {
    extend: stylesFields.error,
  },

  form: {
    extend: extendsStyles['flex-column'],
    'justify-content': 'center',
    'align-items': 'center',
    'min-height': 370,
    height: '40vh',
  
    '@media screen and (orientation: landscape ) and (max-height: 480px)': {
      'min-height': 'unset',
      height: 'unset',
    }
  },
  
  inputsContainer: {
    extend: extendsStyles['flex-column'],
    'justify-content': 'space-evenly',
    width: '100%',
    height: '58%',
  },
  
  buttonContainer: {
    extend: extendsStyles['flex-column'],
    width: '100%',
    height: '15vh',
  
    '& span': {
      'font-size': '1.1rem',
      'font-weight': 'bold',
    },
  
    '@media screen and (orientation: landscape ) and (max-height: 480px)': {
      'margin-top': '3.5vh',
      '& span': {
        'text-align': 'center',
        'font-size': '.9rem',
      }
    },
  },
  
  signInButton: {
    color: colors['black-medium'],
    background: colors['base-white'],
    'border-radius': 5,
    border: [colors['black-medium'], 'solid', 1],
    display: 'inline-block',
    'font-family': 'PlutoSansMedium',
    'font-size': '1.2rem',
    margin: 'auto',
    outline: 'none',
    padding: ['.5rem', '2rem'],
    position: 'relative',
    'text-shadow': [colors['gray-base'], 0, 0],
    transition: ['.25s', 'all', 'ease'],
  
    '&:hover': {
      color: colors['soft-blue'],
      'text-shadow': [colors['gray-base'], .5, .5, 2],
      border: [colors['soft-blue'], 'solid', 3],
      'font-size':' 1.4rem',
      transform: 'scale(1.25)',
    },
  
    '&:active': {
      color: colors['base-white'],
      'text-shadow': [colors['black-medium'], .5, .5, 2],
      background: colors['soft-blue'],
    },
  
    // &:disabled{
    //   color: $black-medium;
    //   background: $gray-base;
    //   border: $black-medium solid 3px;
    //   font-size: 1.1rem;
    //   transform: scale(.9);
    //   opacity: .75;
  
    //   &:hover{
    //     text-shadow: $gray-base 0 0;
    //     transform: scale(.9);
    //     font-size: 1.1rem;
    //   }
    // }
  
    '@media screen and (orientation: landscape ) and (max-height: 480px)': {
      'min-height': 35,
      'font-size': '.9rem',
      
      '&:hover': {
        'font-size': '.9rem',
        transform: 'scale(1.1)',
      }
    }
  }
}


export default this;