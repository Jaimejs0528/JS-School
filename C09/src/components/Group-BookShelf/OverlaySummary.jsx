/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MAX_DAYS_LEND } from 'utils/constants';
import ArticleSummary from './ArticleSummary';

// this is the overlay summary container
class OverlaySummary extends Component {
  // Props Validations
  static propTypes = {
    bookInfo: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    showLendIcon: PropTypes.func.isRequired,
    showSummary: PropTypes.func.isRequired,
    lendABook: PropTypes.func.isRequired,
  }

   constructor(props){
     super(props);
     this.state = {
      limitDate: null,
     };
   }
  
   // When must to render
   shouldComponentUpdate(nextProps) {
     const { show } = this.props;
     
     return (show !== nextProps.show);
   }


   // Add days to a specific date
  addDays = (date, days) => {
    date.setDate(date.getDate()+days);
    return date;
  }

  // get the limit date to lend the book
  selectLimitDate = (date) => {
    this.setState({limitDate: date});
  }

  // Function that calls lend book service
  lendABookDate = () => {
    const { limitDate} = this.state;
    const {showSummary, showLendIcon } =this.props;

    if (limitDate) {
      const { lendABook } = this.props;
      lendABook(limitDate);
      showSummary();
      showLendIcon();
    } else{
      alert('Selecciona una fecha');
    }
  }

  render() {
    const { bookInfo, show } = this.props;
    const { limitDate } = this.state;
    
    return (
      <div 
        className={`overlay-summary ${show && 'show-summary'}`}
        // onClick={showSummary}
        role="button"
        tabIndex="0"
      >
        {/* <div className="arrow" /> */}
        <div>
          <button type="button" onClick={this.lendABookDate} className="button-lend">lend</button>
          <div className="datePicker">
            <DatePicker
              selected={limitDate}
              minDate={this.addDays(new Date(), 1)}
              maxDate={this.addDays(new Date(), MAX_DAYS_LEND)}
              onChange={this.selectLimitDate}
            />
          </div>
          <ArticleSummary bookInfo={bookInfo} />
        </div>
      </div>
    );
  }
}

export default OverlaySummary;
