import React, { useState, useContext, useRef } from "react";
import ContainerContext from "../components/containerContext";
import { v4 as uuidv4 } from 'uuid';

const Container = ({ children }) => {
  const [eventKey] = useState(uuidv4());
  const container = useRef(null);
  const { onToggle, activeEventKey } = useContext(ContainerContext);

  const handleClick = () => {
    const newEventKey = eventKey === activeEventKey ? null : eventKey;
    onToggle(newEventKey);
    if (newEventKey) setTimeout(() => container.current.scrollIntoView(true), 100);
  }

  return (
    <div className="container" ref={container}>
      <div className="title" onClick={handleClick} id={eventKey}>
        {children.title}
      </div>
      {activeEventKey === eventKey && <div className="aufklappbar">{children.body}</div>}
    </div>
  );
};

export default Container;
