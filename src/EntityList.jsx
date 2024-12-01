import React from 'react';
import EntityCard from './EntityCard';

const EntityList = ({ entities, onDelete, onEdit }) => {
  return (
    <div className="entity-list">
      {entities.map((entity, index) => (
        <EntityCard key={index} entity={entity} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default EntityList;