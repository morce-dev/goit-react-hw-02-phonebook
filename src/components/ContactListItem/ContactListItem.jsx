import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { IoMdClose } from 'react-icons/io';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  // handleDelete method
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <li className={css['list']}>
      <p>{filteredContact.name}:</p>
      <p>{filteredContact.number}</p>
      <button onClick={handleDelete} className={css['btn']}>
        <IoMdClose />
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
