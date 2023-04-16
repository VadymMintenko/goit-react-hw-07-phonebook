import React from 'react';
import { ContactsList } from './ContactsList';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { Container, ContactsListSContainer } from './ContactsForm.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    if (
      this.state.contacts.map(contact => contact.name).includes(newContact.name)
    ) {
      alert(`Contact ${newContact.name} already exists.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    resetForm();
  };

  searchContact = evt => {
    this.setState({ filter: evt.target.value.toLowerCase() });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
    this.setState({ filter: '' });
  };

  render() {
    return (
      <Container>
        <ContactsListSContainer>
          <ContactsForm handleSubmit={this.handleSubmit} />
          <ContactsList
            state={this.state}
            onDeleteContact={this.onDeleteContact}
          />

          <Filter
            filter={this.state.filter}
            searchContact={this.searchContact}
          />
        </ContactsListSContainer>
      </Container>
    );
  }
}
