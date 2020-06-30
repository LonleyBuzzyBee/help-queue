import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

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


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage === true) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List"; 
    } else {
      //all of this stuff happens when formVisible == false
      if (this.state.questionVisible === 1) {
        return {
            questionText: "Have you gone through all the steps on the Learn How to Program debugging lesson?",
            clickFunction: this.clickNextQuestion,
            currentlyVisibleState = <Question />,
        };
      } else if (this.state.questionVisible === 2){
        return {
          questionText: "Have you had another pair help you?",
          clickFunction:this.clickNextQuestion,
          currentlyVisibleState = <Question />,
        };
      } else if (this.state.questionVisible === 3) {
        return {
          questionText: "Have you worked for at least 15 minutes on your problem?",
          clickFunction:this.formViewClick,
          currentlyVisibleState = <Question />,
        };
      }


      //Where are we going to put this? We will need access to it later
      // currentlyVisibleState = <TicketList />;
      // buttonText = "Add Ticket";
  //   }
  //   return (
  //     <React.Fragment>
  //       {currentlyVisibleState}
  //       <button onClick={this.formViewClick}>{buttonText}</button> 
  //     </React.Fragment>
  //   );
  // }
  
}

export default TicketControl;


  // render(){
  //   let currentlyVisibleState = null;
  //   let buttonText = null; 
  //   if (this.state.formVisibleOnPage) {
  //     currentlyVisibleState = <NewTicketForm />;
  //     buttonText = "Return to Ticket List"; 
  //   } else {
  //     currentlyVisibleState = <TicketList />;
  //     buttonText = "Add Ticket";
  //   }
  //   return (
  //     <React.Fragment>
  //       {currentlyVisibleState}
  //       <button onClick={this.formViewClick}>{buttonText}</button> 
  //     </React.Fragment>
  //   );
  // }