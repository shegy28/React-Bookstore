import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const { id, title, author } = book;

  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <ul>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </ul>
      <button type="button" id={id} onClick={removeHandler}>Remove</button>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
