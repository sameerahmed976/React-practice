import React, { useState } from "react";

const Profile = () => {
  const [isLogIn, setIsLogIn] = useState(3);

  return (
    <div>
      {isLogIn === 1 ? (
        <h1>Welcome Sameer</h1>
      ) : isLogIn === 2 ? (
        <h1>Welcome Guest</h1>
      ) : (
        <h1>Welcome User3</h1>
      )}
    </div>
  );
};

const ConditionalRendering = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default ConditionalRendering;
