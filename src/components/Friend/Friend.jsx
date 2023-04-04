import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, email, name, username, phone, website } = friend;
  // console.log(friend);
  return (
    <div className="friend">
      <p>{id}</p>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{website}</p>
      <p>
        <Link to={`/friend/${id}`}>Show me details</Link>
      </p>
    </div>
  );
};

export default Friend;
