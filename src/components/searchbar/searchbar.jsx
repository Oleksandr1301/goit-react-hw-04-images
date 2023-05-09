import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Field, ButtonSearch } from './searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSubmit(query.trim());
    }
  };
  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
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
