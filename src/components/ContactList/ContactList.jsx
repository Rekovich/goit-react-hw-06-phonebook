import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/contacts-selector";
import { deleteContactAction } from "redux/contacts/contacts-slice";
import { selectFilteredContacts } from "redux/filter/filter-selector";


const ContactList = () => {
  const dispatch = useDispatch();

  const deleteContact = (id)=>  dispatch(deleteContactAction(id))
  

    const contacts = useSelector(selectFilteredContacts)
  return (
      <ul>{
          contacts.map(({ id, name, number }) => {
              return (
                  <ContactItem
                  key={id}
                  name={name}
                  number={number}
                  contactId={id}
                  // onDeleteContact={onDeleteContact}
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
// onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;