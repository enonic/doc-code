exports.GET = (request) => {
  if (request.mode === 'edit') {
    // do something...
  }

  const name = request.params.name;
  log.info('Name = %s', name);

  return {
    body: `Hello ${name}`,
    contentType: 'text/plain'
  };
};
