import React from 'react';
import { Link } from 'react-router-dom';

function Users(props) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {props.userList.map(user => {
          return (
            <li>
              <Link to={`/users/${user}`}>{user}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
