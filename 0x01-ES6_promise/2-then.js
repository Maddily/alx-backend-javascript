export default function handleResponseFromAPI(promise) {
  return promise.finally(() => console.log('Got a response from the API'))
    .then(() => ({ // eslint-disable-line no-unused-vars
      status: 200,
      body: 'Success',
    }))
    .catch(() => new Error()); // eslint-disable-line no-unused-vars
}
