import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question from "./Question.js";
import PropTypes from "prop-types";

class QuestionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      questionVisible: 1,
    };
      this.formViewClick = this.formViewClick.bind(this); 
    }
  
  formViewClick() {
    let formVisibleOnPage;
    switch(this.state.formVisibleOnPage) {
      case(true):
        formVisibleOnPage = false;
        break;
      case(false):
        formVisibleOnPage = true;
        break;
      default:
        formVisibleOnPage = this.state.formVisibleOnPage;
        break;
    }
    this.setState({ formVisibleOnPage });
  }

  clickNextQuestion = () => {
    this.setState((prevState) => ({
      questionVisible: prevState.questionVisible + 1,
    }));
  };

  displayQuestion = () => {
    if (this.state.questionVisible === 1) {
      return {
        questionText: "Have you gone through all the steps on the Learn How to Program debugging lesson?",
        clickNextFunction: this.clickNextQuestion,
      };
    } else if (this.state.questionVisible === 2) {
      return {
        questionText: "Have you had another pair help you?",
        clickNextFunction: this.clickNextQuestion,
      };
    } else if (this.state.questionVisible === 3) {
      return {
        questionText: "Have you worked for at least 15 minutes on your problem?",
        clickNextFunction: this.formViewClick,
      };
    }
  }

  setVisibility = () => {
    if (this.state.formVisibleOnPage) {
      return {
        component: (
          <NewTicketForm
            onNewTicketFormSubmission={this.props.onNewTicketFormSubmission}
          />
        ),
      };
    } else {
      let currentQuestion = this.displayQuestion();
      return {
        component: (
          <Question
            questionText={currentQuestion.questionText}
            clickNextFunction={currentQuestion.clickNextFunction}
          />
        ),
      };
    }
  };


  render() {
    let currentVis = this.setVisibility();
    return <React.Fragment>
      {currentVis.component}
      </React.Fragment>;
    }
  }  

  QuestionControl.propTypes = {
    onNewTicketFormSubmission: PropTypes.func,
  };

export default QuestionControl;
