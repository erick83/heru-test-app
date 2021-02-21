async function fetchBase(path, opt) {
  const url = new URL(path, `${process.env.REACT_APP_API_URL}api/`).toString();

  const headers = new Headers();
  headers.append('Content-Type', 'Application/json;charset=UTF-8');

  const options = {
    method: opt.method,
    headers,
  };

  if (opt.body) {
    options.body = JSON.stringify(opt.body);
  }

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    // Catch the error, do something and dispatch next catch
    console.error(error);
    throw error;
  }
}

export const get = (path, qs) => {
  const method = 'get';
  return fetchBase(qs ? path + concatQs(qs) : path, {method});
};

export const post = (path, {qs, body} = {}) => {
  const method = 'post';
  return fetchBase(qs ? path + concatQs(qs) : path, {method, body});
};

function concatQs(qs) {
  let str = '';
  for (const prop in qs) {
    const p = `${prop}=${qs[prop]}`;
    str += str === '' ? '?' + p : '&' + p;
  }
  return str;
}
