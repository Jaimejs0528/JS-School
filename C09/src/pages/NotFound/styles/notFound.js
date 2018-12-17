/* eslint-disable import/no-unresolved */
import { colors } from 'commonStyles/colors';
import { extendsStyles } from 'commonStyles/extends';
// import { fonts } from 'commonStyles/fonts';

export const styles = {
  container: {
    extend: extendsStyles['flex-row'],
    'align-items': 'center',
    background: colors["black-medium"],
    'justify-content': 'center',
    height: '100vh',
  },
  noFoundContainer: {
    extends: extendsStyles['flex-column'],
    background: colors['base-white'],
    'font-family': 'PlutoSansCondMedium',
    border: [colors['gray-base'], 'solid', 3],
    'border-radius': 10,
    width: '30vw',
    height: '40vh',
    'min-width': 330,
    'box-shadow': [colors['soft-blue'], 0, 0, 20, 1],
    padding: ['5vh', '5vw'],
    transition: ['all', '.3s', 'ease-out'],
    'text-align': 'center',

    '@media screen and (max-width: 768px)':{
      'min-width': 'unset',
      width: '90vw',
    },

    '& h1':{
      margin: [0, 'auto'],
      'margin-bottom': '5vh',
      'font-size': '3rem',
      color: colors['soft-blue'],
      width: '100%',
      height: 47,
    },

    '& h2': {
      margin: [0, 'auto'],
      'margin-bottom': '5vh',
      color: colors['black-medium'],
      'font-size': '2.2rem',
      width: '100%',
      height: 47,
    },

    '@media screen and (orientation: landscape ) and (max-height: 480px)': {
      height: '90vh',
      width: '90vw',
    },
  }
}

export default this;