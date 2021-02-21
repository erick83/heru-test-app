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

export const get = (path) => {
  const method = 'get';
  return fetchBase(path, {method});
};
