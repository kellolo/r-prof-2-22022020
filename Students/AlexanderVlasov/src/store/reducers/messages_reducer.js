import update from 'react-addons-update';

import { 
    SEND_MSG,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
    SUCCESS_MESSAGE_SENDING
} from '../actions/messages_action.js';
import { ADD_CHAT } from '../actions/chats_action.js';

const initialStore = {
    messages: {},
    isLoading: false
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_MESSAGE_SENDING: {
            if (!store.messages[action.payload.chatId]) store.messages[action.payload.chatId] = {};
            return update(store, {
                messages: {
                    [action.payload.chatId] : {
                        $merge: {
                            [action.payload.messageId]: {
                                user: action.payload.sender, 
                                text: action.payload.text
                            }
                        }
                    }
                }
            })
        }
        case START_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: true }
            })
        }
        case SUCCESS_MESSAGES_LOADING: {
            const messages = {};
            action.payload.forEach(msg => {
                const { text, sender, date, chatId } = msg;
                if (!messages[msg.chatId]) {
                    messages[msg.chatId] = {};
                }
                messages[msg.chatId][msg.messageId] = {
                    text: text,
                    user: sender,
                    date: date,
                    chatId: chatId
                }
            });
            return update(store, {
                messages: { $set: messages },
                isLoading: { $set: false }
            })
        }
        case ERROR_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: false }
            })
        }
        case ADD_CHAT: {
            return update(store, {
                messages: {
                    $merge: { [action.chatId]: {  } }
                }
            })
        }
        default: return store;
    }
}