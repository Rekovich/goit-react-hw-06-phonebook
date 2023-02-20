import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './contact-form.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid(4);
  const numberInputId = nanoid(4);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContacts = {
      id: nanoid(5),
      name: name,
      number: number,
    };
    addContact(newContacts);
    setName('');
    setNumber('');
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={css.formLabel}>
          Name
        </label>
        <input
          className={css.formInput}
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={numberInputId} className={css.formLabel}>
          Number
        </label>
        <input
          className={css.formInput}
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
