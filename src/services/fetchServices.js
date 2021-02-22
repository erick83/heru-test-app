import {URL_BASE} from 'react-native-dotenv';

async function fetchBase(path, opt) {
  try {
    const response = await fetch(path, opt);
    return response.json();
  } catch (error) {
    // Catch the error, do something and dispatch next catch
    // eslint-disable-next-line no-alert
    alert(error);
    throw error;
  }
}

export const get = () => {
  const method = 'get';
  return fetchBase(URL_BASE, {method});
};
