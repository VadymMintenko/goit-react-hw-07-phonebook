import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';
import { initialState } from 'initialState/initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(addContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    });
    builder.addCase(deleteContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
