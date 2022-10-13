import styled from 'styled-components';

export const UserCard = styled.div `
  width: 320px;
  margin: 20px auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
`;

export const Description = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const Avatar = styled.img `
  width: 150px;
  border-radius: 20px;
  border: 4px solid green;
  &:hover {
    box-shadow: rgba(30, 187, 55, 0.6) -5px 5px,
      rgba(30, 187, 55, 0.4) -10px 10px, rgba(30, 187, 55, 0.2) -15px 15px,
      rgba(30, 187, 55, 0.1) -20px 20px, rgba(30, 187, 55, 0.05) -25px 25px;
    transition: 500ms;
  }
`;

export const Username = styled.p `
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Tag = styled.a `
  margin-top: 10px;
  color: grey;
  &:hover,
  &:focus {
    color: red;
    transition: 500ms;
  }
`;

export const Location = styled.p `
  font-size: 17px;
  margin: 5px auto;
`;

export const StatsList = styled.ul `
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: rgba(30, 187, 55, 0.8);
  color: white;
  border-radius: 10px;
`;

export const Stat = styled.li `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 50px;
  padding: 10px;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    color: red;
    transition: 600ms;
  }
`;

export const Label = styled.span ``;

export const Quantity = styled.span `
  margin-top: 8px;
  font-weight: bold;
`;