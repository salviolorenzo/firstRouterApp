import React from 'react';

function OneUser(props) {
  const name = props.match.params.name;
  return (
    <div>
      <h2>{name}</h2>
      <h5>{props.array[name]}</h5>
    </div>
  );
}

export default OneUser;
