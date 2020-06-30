import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question from "./Question.js";
import PropTypes from "prop-types";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
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

setVisibility = () => [
  
]

  

render(){
    let currentlyVisibleState = this.setVisibility();
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}
  
export default TicketControl;



// render(){
//     let currentlyVisibleState = null;
//     if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewTicketForm />
//     } else {
//       currentlyVisibleState = <TicketList />
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//       </React.Fragment>
//     );
//   }

  