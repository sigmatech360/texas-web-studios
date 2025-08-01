import React from "react";


const ObfuscatedEmail = (props) => {
  const user = "support";
  const domain = "texaswebstudios";
  const tld = "com";

  const handleClick = () => {
    window.location.href = `mailto:${user}@${domain}.${tld}`;
  };

  return (
    <span
      onClick={handleClick}
      className={`ObfuscatedEmail ${props.className}`}
      //   style={{ cursor: 'pointer' }}
    >
      {user}
      <span className="at"></span>
      {domain}
      <span className="dot"></span>
      {tld}
    </span>
  );
};

export default ObfuscatedEmail;
