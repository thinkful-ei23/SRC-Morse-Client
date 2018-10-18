// Attempt to add question in its own component

import React from 'react';

import { connect } from "react-redux";
import { fetchQuestions } from "../actions/questions";
import requiresLogin from "./requires-login";

export class DisplayQuestions extends React.Component {
  componentDidMount() {
    console.log('componentdidMount');
    this.props.dispatch(fetchQuestions());
  }

  render() {
    const questionObject = this.props.questions;
    if(!questionObject) {
      return <div>loading...</div>
    }
    // console.log(questionObject)
    // const askQuestion = Object.keys(questionObject[0])[0]

    return (
      <p>What word is this</p>
    );
  }

}

const mapStateToProps = (state, props) => {
  console.log('in mapstatetoprops', state, props);
  return {
    questions: state.question.question
  };
};

export default connect(mapStateToProps)(DisplayQuestions);