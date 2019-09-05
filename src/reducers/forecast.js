const initialState = {
  forecast: null,
  currentWeather: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_FORECAST':
      return {
        ...state,
        forecast: payload
      };
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        currentWeather: payload
      };
    default:
      return state;
  }
};
