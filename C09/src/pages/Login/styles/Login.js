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

export default this;