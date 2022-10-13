import { Name, Status } from './FriendListItem.styles';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}> </Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
};
