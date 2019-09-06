const initialState = {
  selectedCity: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CITY':
      return {
        ...state,
        selectedCity: payload
      };
    default:
      return state;
  }
};
