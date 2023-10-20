import { Feedback, Title } from "./Section.styled"

export const Section = ({ title, children }) => {
  return (
    <Feedback>
      <Title>{title}</Title>
      {children}
    </Feedback>
  )
}
