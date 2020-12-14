import { useSelector } from 'react-redux';

export const useLsv = lsv => {
  const activeLanguage = useSelector(state => state.app.activeLanguage);
  const defaultLanguage = 'en';

  return lsv[activeLanguage] || lsv[defaultLanguage];
};
