import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ book }) => (
  <div>
    <ul>
      <li>{book.title}</li>
      <li>{book.author}</li>
    </ul>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
