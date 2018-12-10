import React from 'react';

function OneUser(props) {
  return <h2>{props.match.params.name}</h2>;
}

export default OneUser;
