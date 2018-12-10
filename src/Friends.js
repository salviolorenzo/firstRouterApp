import React from 'react';
import { Link } from 'react-router-dom';

function Friends(props) {
  let user = props.match.params.name;
  let friendArray = props.userFriends[user];
  return (
    <div>
      <h3>Friends</h3>
      <ul>
        {friendArray.map(friend => {
          return (
            <li>
              <Link to={`/users/${friend}`}>{friend}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Friends;
