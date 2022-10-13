import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend/FriendList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

export const App = () => {
  console.log(user);
  return (
    <div>
      <Profile profile={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
