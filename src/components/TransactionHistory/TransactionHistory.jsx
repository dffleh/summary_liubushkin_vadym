import { Header, Item, Table, Wrap } from './TransactionHistory.styles';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Header>
        <Wrap>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Wrap>
      </Header>

      <tbody>
        {items.map(items => (
          <tr key={items.id}>
            <Item>{items.type}</Item>
            <Item>{items.amount}</Item>
            <Item>{items.currency}</Item>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
