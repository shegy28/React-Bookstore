import { v4 as uuidv4 } from 'uuid';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const initialState = [
  {
    id: uuidv4(),
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
  },
  {
    id: uuidv4(),
    title: 'A Passage to India',
    author: 'E.M. Forster',
  },
];

const addBook = (book) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
  },
});

const removeBook = (index) => ({
  type: REMOVE,
  payload: index,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
};

export { addBook, removeBook };
export default bookReducer;
