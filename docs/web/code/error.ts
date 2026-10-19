export function handle404(err) {
    return {
        contentType: 'text/html',
        body: `
<html>
  <body>
      <h1>No page for you!</h1>
  </body>
</html>
`
    };
}

export function handleError(err) {
    return {
        contentType: 'text/html',
        body: `
<html>
  <body>
      <h1>Error code "${err.status}"</h1>
  </body>
</html>
`
    };
}
