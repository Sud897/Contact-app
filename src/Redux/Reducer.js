import { ADD_DATA, DELETE_DATA, EDIT_DATA } from "./Type";

const initialState = [
  {
    id: 0,
    name: "Sudip Bhowmick",
    number: "9123351353",
    email: "sudip@gmail.com",
  },
  {
    id: 1,
    name: "Rusu Bhowmick",
    number: "9051759270",
    email: "rusu@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case EDIT_DATA:
      const editedContact = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = editedContact;
      return state;
    case DELETE_DATA:
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;
    default:
      return state;
  }
};
export default contactReducer;
