import { SUCCESS_MESSAGE_SENDING, sendMessage } from '../store/actions/messages_action.js';

export default store => next => (action) => {
    switch (action.type) {
        case SUCCESS_MESSAGE_SENDING: 
            if (action.payload.sender === 'Alex') {
                setTimeout(() => store.dispatch(
                    sendMessage(
                        null,
                        action.payload.chatId,
                        'Bot',
                        'I\'m bot'
                    )
                ), 1000);
            }
    }
    return next(action);
}