import React from 'react';

const Table = ({ entities, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {entities.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'even' : 'odd'}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
              <button onClick={() => onDelete(item.id)}>Удалить</button>
              <button onClick={() => onEdit(item.id)}>Редактировать</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;