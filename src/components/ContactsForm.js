import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { object, string } from 'yup';
import { FormFild } from './ContactsForm.styled';

let schema = object({
  name: string().required(),
});

export const ContactsForm = ({ handleSubmit }) => {
  const initialValue = {
    name: '',
    number: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <ErrorMessage name="name" component="div" />

          <FormFild>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormFild>
          <FormFild>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormFild>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

ContactsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
