import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            id: value.id,
            name: value.name,
            number: value.number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      },
      prepare(contactId) {
        return {
          payload: contactId,
        };
      },
    },
    filterContact: {
      reducer(state, action) {
        state.filter = action.payload;
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
