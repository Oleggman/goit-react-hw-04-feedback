import React, { Component } from 'react'
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) =>
      acc += item, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return good / Object.values(this.state).reduce((acc, item) =>
      acc += item, 0);
  }

  onClickFeedback = (evt) => {
    const feedback = evt.target.textContent;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1
    }))
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onClickFeedback} />
        
        {!(this.countTotalFeedback()) && <Notification message="There is no feedback" />}
        {!!this.countTotalFeedback() &&
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>
        }
      </Section>
    )
  }
}
