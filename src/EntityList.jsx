import React from 'react';
import EntityCard from './EntityCard';

const EntityList = ({ entities }) => {
  return (
    <div className="entity-list">
      {entities.map((entity, index) => (
        <EntityCard key={index} entity={entity} />
      ))}
    </div>
  );
};

export default EntityList;