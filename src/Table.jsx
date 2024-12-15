import React from 'react';

const Table = ({ entities, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {entities.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'even' : 'odd'}>
            <td>{item.name}</td> 
            <td>{item.description}</td>
            <td>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;