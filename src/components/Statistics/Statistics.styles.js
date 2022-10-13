import styled from 'styled-components';

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatSection = styled.section `
  margin: 15px auto;
  background-color: white;
  width: 320px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
`;

export const StatTitle = styled.h2 `
  text-align: center;
  padding: 16px 0;
  color: green;
  font-size: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid;
`;

export const StatList = styled.ul `
  display: flex;
`;

export const Label = styled.span `
  font-size: 14px;
  color: white;
`;

export const Percentage = styled.span `
  font-size: 16px;
  color: white;
`;

export const Item = styled.li `
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  align-items: center;
  background-color: ${randomColor};
  border-radius: 4px;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    color: red;
    background-color: ${randomColor};
    transition: 600ms;
  }
`;