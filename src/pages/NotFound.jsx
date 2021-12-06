import React from "react";

const NotFound = () => {
  return (
    <div align="center">
      <h1 className="mt-4">
        <span className="text-primary">404:</span> Page Not Found 😥
      </h1>
      <hr />
      <img
        src="https://i.giphy.com/media/6f15PceJUw8WGlj4uu/giphy.gif"
        alt="Panik"
      />
      <br />
      <br />

      <h3>
        Don´t worry about it, there are more pages in the{" "}
        <a href="https://google.com">web!</a>
      </h3>
    </div>
  );
};

export default NotFound;
