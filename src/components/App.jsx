import { ContactsList } from './ContactsList';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { Container, ContactsListSContainer } from './ContactsForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'Redax/selectors';
import { addContacts, fetchContacts } from '../Redax/operations';
import { useEffect } from 'react';
export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    dispatch(addContacts(values));
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
