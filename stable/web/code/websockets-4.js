// Allow only specific origins to open the WebSocket
exports.GET = function (req) {

  if (!req.webSocket) {
    return { status: 404 };
  }

  return {
    webSocket: {
      subProtocols: ['text'],
      checkOrigin: function (origin) {
        return origin === 'https://app.example.com'
            || origin.endsWith('.example.com');
      }
    }
  };
};