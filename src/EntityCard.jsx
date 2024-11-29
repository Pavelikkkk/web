import React from 'react';

const EntityCard = ({ entity }) => {
  return (
    <div className="entity-card">
      <h3>{entity.name}</h3>
      <p>{entity.description}</p>
    </div>
  );
};

export default EntityCard;