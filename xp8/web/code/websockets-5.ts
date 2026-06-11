// Keep the session alive while the client is active, close the socket on logout
exports.GET = (req) => {

  if (!req.webSocket) {
    return { status: 404 };
  }

  return {
    webSocket: {
      subProtocols: ['text'],
      terminateOnSessionExit: true,   // close the socket when the session ends (default)
      sessionAccess: true,            // inbound messages keep the session alive
      sessionAccessThrottleMs: 30000  // refresh the session at most every 30 seconds
    }
  };
};