// Allow only specific origins to open the WebSocket
export function GET(req) {

  if (!req.webSocket) {
    return { status: 404 };
  }

  return {
    webSocket: {
      subProtocols: ['text'],
      checkOrigin: (origin) =>
        origin === 'https://app.example.com'
          || origin.endsWith('.example.com')
    }
  };
}
