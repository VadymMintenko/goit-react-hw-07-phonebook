// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ListContacts, ListItem, DeleteButton } from './ContactsForm.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redax/contactSlice';
import { filterContact } from '../Redax/contactSlice';
import { getContacts, getFilter } from 'Redax/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    dispatch(filterContact(''));
  };

  return (
    <>
      <ListContacts>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(element => {
            return (
              <ListItem key={nanoid()}>
                <p>{element.name}:</p>
                <p>{element.number}</p>
                <DeleteButton onClick={() => onDeleteContact(element.id)}>
                  delete contact
                </DeleteButton>
              </ListItem>
            );
          })}
      </ListContacts>
      <p></p>
    </>
  );
};

// ContactsList.propTypes = {
//   filter: PropTypes.string,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,

//   onDeleteContact: PropTypes.func.isRequired,
// };
