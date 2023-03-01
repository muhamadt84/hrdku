// redux/reducers/countReducer.js
const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOKEN':
      return {
        ...state,
        token: action.payload || state.token,
      };
    default:
      return state;
  }
};
