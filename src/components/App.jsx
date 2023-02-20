import {  useEffect, useRef, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './app.module.css';
import localBaseContacts from 'helpers/localBase';

const App =()=> {

const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? localBaseContacts)
const [filter, setFilter] = useState('')
const setNotLocalStorage = useRef(true);

// useEffect(()=>{
//   const localStoreContacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(localStoreContacts)
//   setContacts(parsedContacts)
//   if(parsedContacts !== null){

//   }
// }, [])

useEffect(()=>{
  if (setNotLocalStorage.current) {
    setNotLocalStorage.current = false;
    return;
  }
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

  

  const addContact = (newContacts) => {
   const newContact= contacts.find(contact => {
        return contact.name.toLowerCase().trim() ===  newContacts.name.toLowerCase().trim()
        
      }
    ) 
    if(newContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts =>  [newContacts, ...prevContacts],
    );
  };

 const onChangeFilter = e => {
  setFilter( e.currentTarget.value );
  };

 const findContact = () => {
   
    return contacts.filter(contact =>{ console.log(contact)
     return  contact.name.toLowerCase().includes(filter.toLowerCase().trim())}
    );
  };

 const handleDeleteContact = (id) => {
  setContacts(contacts.filter(contact => contact.id !== id));
  };

  
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter value={filter} onChangeFilter={onChangeFilter} />
        <ContactList
          contacts={findContact()}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    );
    }


export default App;
