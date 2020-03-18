import update from 'react-addons-update';

import {
    SUCCESS_CHATS_ADDING,
    SUCCESS_CHATS_LOADING,
    SUCCESS_CHATS_DELETING
} from '../actions/chats_action.js';

const initialStore = {
    chats: {},
    isLoading: true
}

export default function chatsReducer(store = initialStore, action) {
    switch (action.type) {
        case SUCCESS_CHATS_ADDING: {
            return update(store, {
                chats: {
                    $merge: {
                        [action.payload.chatId] : {
                            title: action.payload.title
                        }
                    }
                }
            })
        }
        case SUCCESS_CHATS_DELETING: {
            let chats = Object.assign({}, store.chats);
            delete chats[action.payload.chatId];
            return update(store, {
                chats: {
                    $set: chats
                }
            });
        }
        case SUCCESS_CHATS_LOADING: {
            const chats = {};
            action.payload.forEach(chat => {
                const { title } = chat;
                chats[chat.chatId] = { title };
            });
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false }
            })
        }
        default: return store;
    }
}