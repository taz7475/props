/** @format */

import React from "react";

const Profile = ({ FullName, Bio, Profession, age, children }) => {
  return (
    <div>
      {children}
      <h1>{FullName}</h1>
      <h1>
        {" "}
        {Bio} I am {FullName} , my age {age}{" "}
      </h1>
      <h1> {Profession} </h1>
    </div>
  );
};

export default Profile;
