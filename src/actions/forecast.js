export const setForecast = data => {
  return {
    type: 'SET_FORECAST',
    payload: data
  };
};

export const setCurrentWeather = data => {
  return {
    type: 'SET_CURRENT_WEATHER',
    payload: data
  };
};

export const formatTemperature = () => {
  return {
    type: 'SET_FORECASTSET_CURRENT_WEATHER',
  };
};
