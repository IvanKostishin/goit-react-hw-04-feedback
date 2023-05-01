import React, { Component } from 'react';
import Statistics from './Statistics/Statistics ';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickFeedbackButton = ({ target: { name } }) => {
    if (name === 'good') {
      setGood(good + 1);
      return;
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1);
      return;
    }
    if (name === 'bad') {
      setBad(bad + 1);
      return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentFeedback = Math.round((good * 100) / (good + neutral + bad));
    return percentFeedback ? percentFeedback : 0;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClickFeedbackButton}
        ></FeedbackOptions>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Section>
    </div>
  );
};

export default App;
