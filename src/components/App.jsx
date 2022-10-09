import { Profile } from "./Profile";
import user from "./user.json"

export const App = () => {
  console.log(user);
  return (
    <div>
      <Profile profile={user}/>
      
    </div>
  );
};
