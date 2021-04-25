import React, { useState } from "react";

const Container = ({ children, coral }) => {
  const [extended, setExtended] = useState(false);

  const handleClick = () => {
    setExtended(!extended);
  }

  return (
    <div className={`container right ${coral ? 'coral' : 'blue'}`}>
      <div onClick={handleClick}>{children.title}</div>
      {extended && <div className="aufklappbar">
        {children.body}
      </div>}
    </div>
  );
};

export default Container;
