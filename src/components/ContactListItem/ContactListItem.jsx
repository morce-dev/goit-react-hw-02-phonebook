import React from 'react';

export const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button>Delete</button>
    </li>
  );
};
