import React from 'react';
import { Link } from 'react-router-dom';

function OneUser(props) {
  const name = props.match.params.name;
  return (
    <div>
      <h2>{name}</h2>
      <h5>{props.array[name]}</h5>
      <Link to={`/users/${name}/friends`}>Friends</Link>
    </div>
  );
}

export default OneUser;
