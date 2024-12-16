import React from 'react';
import EntityCard from './EntityCard';

const EntityList = ({ entities, onDelete,}) => {
  return (
    <div className="entity-list">
      {entities.map((entity, index) => (
        <EntityCard key={index} entity={entity} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EntityList;