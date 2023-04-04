import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  const { id, name, email, website, username, phone } = friend;
  return (
    <div>
      <h1>Everything of this person all is here</h1>
      <div className="friend">
        <p>{id}</p>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{website}</p>
      </div>
    </div>
  );
};

export default FriendDetail;
