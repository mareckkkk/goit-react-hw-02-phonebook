import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList(props) {
  const { friends } = props;

  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};