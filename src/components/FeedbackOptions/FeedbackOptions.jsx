import { OptionBox, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionBox>
      {options.map(item =>
        <Button key={item} type="button" onClick={onLeaveFeedback}>{item}</Button>)}
    </OptionBox>
  );
}