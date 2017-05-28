export default (url, data, { headers } = {}) => {
  return fetch(url, {
    method: 'PUT',
    body: data,
    headers
  })
}
