import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem/ContactItem";


const ContactList = ({ contacts, onDeleteContact }) => {
    
  return (
      <ul>{
          contacts.map(({ id, name, number }) => {
              return (
                  <ContactItem
                  key={id}
                  name={name}
                  number={number}
                  contactId={id}
                  onDeleteContact={onDeleteContact}
                  />
              );
          })}   
      </ul>
  )
};

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })
),
onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;