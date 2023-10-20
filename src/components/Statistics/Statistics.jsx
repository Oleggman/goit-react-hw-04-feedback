import { StatBox, StatTitle, Rating } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatBox>
      <StatTitle>Statistics</StatTitle>
      <Rating>Good: {good}</Rating>
      <Rating>Neutral: {neutral}</Rating>
      <Rating>Bad: {bad}</Rating>
      <p>Total: {total}</p>
      <p>Positive percentage: {Math.round(positivePercentage * 100)}%</p>
    </StatBox>
  );
}