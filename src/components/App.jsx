import { Profile } from './Profile';
import { Statistics } from './Statistics';
import user from './user.json';
import data from './data.json';

export const App = () => {
  console.log(user);
  return (
    <div>
      <Profile profile={user} />
      <Statistics statistics={data} />
    </div>
  );
};
