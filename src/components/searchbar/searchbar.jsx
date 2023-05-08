import { Component } from 'react';
import PropTypes from "prop-types";
import { Formik } from 'formik';
import {
  Form,
  Field,
  ButtonSearch,
} from './searchbar.styled';

export class Searchbar extends Component {
  render() {
  return (
    <Formik>
      <Form  onSubmit={this.props.onSubmit}>
        
        <Field
          
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <ButtonSearch type="submit" >
          <span >Search</span>
        </ButtonSearch>
      </Form>
    </Formik>
  );
  }
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};