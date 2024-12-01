import React from 'react';

const EntityCard = ({ entity , onDelete, onEdit}) => {
  return (
    <div className="entity-card">
      <h3>{entity.name}</h3>
      <p>{entity.description}</p>
      <button onClick={() => onDelete(entity.id)}> Delete </button>
      <button onClick={() => onEdit(entity.id)}> Edit </button>

    </div>
  );
};

export default EntityCard;