import styled from 'styled-components';

export const Table = styled.table`
  margin: 15px auto;
  width: 320px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
`;

export const Header = styled.thead`
  text-transform: uppercase;
  color: green;
`;

export const Wrap = styled.tr`
  text-align: center;
  border-radius: 20px;
`;

export const Item = styled.td`
  text-align: center;
`;
