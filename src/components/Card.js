import React from 'react';

const Card = ({id, name, username, email}) => {
  return (
    <div className = "bg-lightest-blue dib br3 pa3 ma2 grow bw2 pointer shadow-5 tc">
      <img alt = "Profile1" src = {`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
