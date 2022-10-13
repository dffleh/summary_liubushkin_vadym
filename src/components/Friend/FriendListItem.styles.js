import styled from 'styled-components';

export const Name = styled.p `
  font-weight: bold;
`;

export const Status = styled.span `
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;