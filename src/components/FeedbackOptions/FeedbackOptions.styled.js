import styled from "styled-components";

export const OptionBox = styled.div`
  display: flex;
  gap: 28px;
  width: fit-content;
  margin: 0 auto;
`;

export const Button = styled.div`
  background: #fe921f; 
  color: #ffffff; 
  display: inline-block; 
  font-family: 'Trebuchet MS', 'Lucida Sans', Arial, sans-serif;
  margin: 0 0 20px; 
  padding: 10px 15px; 
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 18px;
  user-select: none;
  transition: color 200ms, background 200ms;

  &:hover {
    color: #fe921f;
    background: #ffffff;
  }
`;