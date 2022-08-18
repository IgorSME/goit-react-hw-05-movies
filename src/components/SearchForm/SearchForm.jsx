import { useState } from 'react';
import { Button, Form } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={onChange} />
      <Button>Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
