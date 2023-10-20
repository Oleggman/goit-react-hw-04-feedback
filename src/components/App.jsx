import { useState } from 'react'
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return good / countTotalFeedback();
  }

  const onClickFeedback = (evt) => {
    const feedback = evt.target.textContent;

    switch (feedback) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  }
  
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onClickFeedback} />
        
      {!(countTotalFeedback()) && <Notification message="There is no feedback" />}
      {!!countTotalFeedback() &&
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}/>
      }
    </Section>
  )
}
