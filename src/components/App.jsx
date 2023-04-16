import { ContactsList } from './ContactsList';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { Container, ContactsListSContainer } from './ContactsForm.styled';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from '../Redax/contactSlice';
import { getContacts } from 'Redax/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (contacts.map(contact => contact.name).includes(newContact.name)) {
      alert(`Contact ${newContact.name} already exists.`);
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Container>
      <ContactsListSContainer>
        <ContactsForm handleSubmit={handleSubmit} />
        <ContactsList contacts={contacts} />

        <Filter />
      </ContactsListSContainer>
    </Container>
  );
};
