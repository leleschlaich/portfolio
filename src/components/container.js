import React, { useState, useContext } from "react";
import ContainerContext from "../components/containerContext";
import { v4 as uuidv4 } from 'uuid';

const Container = ({ children }) => {
  const [eventKey] = useState(uuidv4());
  const { onToggle, activeEventKey } = useContext(ContainerContext);

  const handleClick = () => {
    window.location.hash = '#' + eventKey;
    onToggle(eventKey === activeEventKey ? null : eventKey);
  }

  return (
    <div className="container">
      <div className="title" onClick={handleClick} id={eventKey}>
        {children.title}
      </div>
      {activeEventKey === eventKey && <div className="aufklappbar">{children.body}</div>}
    </div>
  );
};

export default Container;
