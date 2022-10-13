import PropTypes from 'prop-types';
import {
  Tag,
  Username,
  Avatar,
  Description,
  UserCard,
  Location,
  StatsList,
  Stat,
  Label,
  Quantity,
} from './Profile.styles';
export const Profile = ({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <UserCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Username>{username}</Username>
        <Tag href="#">@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <Stat>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </Stat>
        <Stat>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </Stat>
        <Stat>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </Stat>
      </StatsList>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
console.log(Profile.username);
