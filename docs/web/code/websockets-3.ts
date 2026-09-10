// Lib that contains websocket functions.
import {send, addToGroup, getGroupSize, sendToGroup} from '/lib/xp/websocket';

// Listen to a websocket event
export function webSocketEvent(event) {

  if (event.type === 'open') {
    // Send message back to client
    const name = event.session.user ? event.session.user.displayName : 'anonymous';
    send(event.session.id, `Welcome to our chat ${name}`);

    // Add client into a group
    addToGroup('chat', event.session.id);

    log.info(`New group size ${getGroupSize('chat')}`);
  }

  if (event.type === 'message') {
    // Propagate message to group
    sendToGroup('chat', event.message);
  }

  if (event.type === 'close') {
    log.info(`User left the chat`);
  }

}
