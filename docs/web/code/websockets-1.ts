
// Create a websocket if websocket request.
export function GET(req) {

  if (!req.webSocket) {
    return {
      status: 404
    };
  }

  return {
    webSocket: {
      data: {
        user: "test"
      },
      subProtocols: ["text"]
    }
  };
}
