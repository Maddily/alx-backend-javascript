export default function handleResponseFromAPI(promise) {
  promise.finally(() => console.log('Got a response from the API'))
    .then((result) => ({ // eslint-disable-line no-unused-vars
      status: 200,
      body: 'Success',
    }))
    .catch((error) => Error()); // eslint-disable-line no-unused-vars
}
