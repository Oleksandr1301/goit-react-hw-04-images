import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Field, ButtonSearch } from './searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Formik>
      <Form onSubmit={onSubmit}>
        <Field
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <ButtonSearch type="submit">
          <span>Search</span>
        </ButtonSearch>
      </Form>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
