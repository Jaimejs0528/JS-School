/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MAX_DAYS_LEND } from 'utils/constants';
import ArticleSummary from './ArticleSummary';

// this is the overlay summary container
class OverlaySummary extends Component {
  // Props Validations
  static propTypes = {
    bookInfo: PropTypes.object.isRequired,
    showByISBN: PropTypes.number.isRequired,
    lendABook: PropTypes.func.isRequired,
    selectLimitDate: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    closeSummary: PropTypes.func.isRequired,
    limitDate: PropTypes.object,
  }
  
  // When must to render
  shouldComponentUpdate(nextProps) {
    const { showByISBN, limitDate } = this.props;
  
    return (showByISBN !== nextProps.showByISBN ||
      limitDate !== nextProps.limitDate);
  }

  // Add days to a specific date
  addDays = (date, days) => {
    date.setDate(date.getDate()+days);
    return date;
  }

  render() {
    const {
      bookInfo,
      showByISBN,
      closeSummary,
      selectLimitDate,
      lendABook,
      classes,
      limitDate } = this.props;
    return (
      <div 
        className={`overlay-summary ${showByISBN === bookInfo.isbn && 'show-summary'}`}
        role="button"
        tabIndex="0"
      >
        <FontAwesomeIcon onClick={closeSummary} icon={faTimes} />
        <button type="button" onClick={lendABook} className="button-lend">lend</button>
        <div className="datePicker">
          <DatePicker
            selected={limitDate}
            minDate={this.addDays(new Date(), 1)}
            maxDate={this.addDays(new Date(), MAX_DAYS_LEND)}
            onChange={selectLimitDate}
          />
        </div>
        <ArticleSummary classes={classes} bookInfo={bookInfo} />
      </div>
    );
  }
}

export default OverlaySummary;
