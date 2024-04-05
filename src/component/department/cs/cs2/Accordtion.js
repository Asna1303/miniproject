// Accordion.js
import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;
