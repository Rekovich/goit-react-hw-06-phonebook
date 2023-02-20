import React from 'react';
import PropTypes from 'prop-types';
import css from './contact-item.module.css';

const ContactItem = ({ name, number, contactId, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <span className={css.contactItem__text}>{name}</span>
      <span className={css.contactItem__text}>{number}</span>
      <button
        className={css.contactItem__button}
        type="button"
        onClick={() => onDeleteContact(contactId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;