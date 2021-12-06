import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { userData } from "../helpers/userData";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div className="container text-center mt-4">
      <h1>Welcome 👋!</h1>
      <hr />
      {!user ? (
        <button className="btn btn-info mt-3" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button className="btn btn-warning mt-3" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
