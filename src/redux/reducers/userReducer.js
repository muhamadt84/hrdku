// redux/reducers/countReducer.js
const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER':
      return {
        ...state,
        user: action.payload || state.user,
      };
    default:
      return state;
  }
};
