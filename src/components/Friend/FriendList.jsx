import { FriendsList, Item } from './FriendList.styles';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friends => (
        <Item key={friends.id}>
          <FriendListItem friend={friends} />
        </Item>
      ))}
    </FriendsList>
  );
};
