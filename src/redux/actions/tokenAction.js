// redux/actions/countAction.js
export const token = data => {
  return {
    type: 'TOKEN',
    payload: data,
  };
};
