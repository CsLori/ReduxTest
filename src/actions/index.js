export const increment = plus => {
  return {
    type: 'INCREMENT',
    payload: plus
  };
};

export const decrement = minus => {
  return {
    type: 'DECREMENT',
    payload: minus
  };
};
