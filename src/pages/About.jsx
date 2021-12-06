import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container text-center mt-4">
      <h1>About 🧐</h1>
      {!user ? (
        <h2 className="text-danger mt-3">Please, Login</h2>
      ) : (
        <div>
          <img
            className="mt-5"
            src={user.data.avatar}
            alt="{user.data.id}"
            width="150px"
            height="150px"
          />
          <h3 className="mt-3">
            <span className="text-primary">Full Name: </span>
            {user.data.first_name} {user.data.last_name}
          </h3>
          <h3>
            <span className="text-primary">E-mail: </span> {user.data.email}
          </h3>
        </div>
      )}
    </div>
  );
};

export default About;
