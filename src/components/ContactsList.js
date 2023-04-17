// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ListContacts, ListItem, DeleteButton } from './ContactsForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'Redax/selectors';
import { deleteContacts } from '../Redax/operations';
import { setFilter } from 'Redax/filterSlice';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);


  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
    dispatch(setFilter(''));
  };

  return (
    <>
      <ListContacts>
        {contacts.map(element => {
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
