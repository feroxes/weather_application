import { useSelector } from 'react-redux';

export const useLsv = lsv => {
  const activeLanguage = useSelector(state => state.app.activeLanguage);

  return lsv[activeLanguage];
};
