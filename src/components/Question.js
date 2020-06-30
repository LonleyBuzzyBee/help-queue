import React from 'react';
import NewTicketForm from './NewTicketForm';



function Question(props) {
  return (
    <React.Fragment>
      <h3>{props.questionText}</h3>
      <button onClick={props.clickFunction}>Yes</button>
    </React.Fragment>
    );
  }

  Questions.propTypes = {
    questionText: PropTypes.string,
  };
  

export default Question;









//Have you gone through all the steps on the Learn How to Program debugging lesson?
// "Have you asked another pair for help?"
// "Have you spent 15 minutes going through through the problem documenting every step?"