import styled from 'styled-components';

const shadowGreen = `rgba(30, 187, 55, 0.6) -5px 5px,
      rgba(30, 187, 55, 0.4) -10px 10px, rgba(30, 187, 55, 0.2) -15px 15px,
      rgba(30, 187, 55, 0.1) -20px 20px, rgba(30, 187, 55, 0.05) -25px 25px`;

const shadowRed = `rgba(255, 39, 25, 0.6) -5px 5px,
      rgba(255, 39, 25, 0.4) -10px 10px, rgba(255, 39, 25, 0.2) -15px 15px,
      rgba(255, 39, 25, 0.1) -20px 20px, rgba(255, 39, 25, 0.05) -25px 25px`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px auto;
  width: 320px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
  &:hover {
    transform: translate3d(15px, -15px, 0);
    box-shadow: ${props => (props.isOnline ? shadowGreen : shadowRed)};
    transition: 1000ms;
  }
`;
