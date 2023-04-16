import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  ({ id, name, number }) => {
    return {
      payload: {
        id,
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction(
  'contacts/deleteContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);

export const filterContact = createAction('filter/filterContact', value => {
  return {
    payload: value,
  };
});
