import PropTypes from 'prop-types';
// import { ImBin } from 'react-icons/im';
import s from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.contactListItem}>
      <span>{name}:</span> {number}
      <button type="button" onClick={() => onDeleteContact(id)} className = {s.btnDlt}>
        {/* <ImBin style={{ marginRight: 5 }} /> */}
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};