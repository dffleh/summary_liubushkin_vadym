import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friends => (
        <li className="item" key={friends.id}>
          <FriendListItem friend={friends} />
        </li>
      ))}
    </ul>
  );
};
