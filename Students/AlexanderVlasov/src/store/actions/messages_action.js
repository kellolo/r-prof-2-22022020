import { RSAA, getJSON } from 'redux-api-middleware';

export const START_MESSAGE_SENDING = '@@message/START_MESSAGE_SENDING';
export const SUCCESS_MESSAGE_SENDING = '@@message/SUCCESS_MESSAGE_SENDING';
export const ERROR_MESSAGE_SENDING = '@@message/ERROR_MESSAGE_SENDING';

export const sendMessage = (messageId, chatId, sender, text) => ({
    [RSAA]: {
        endpoint: '/api/message',
        method: 'POST',
        body: JSON.stringify({chatId, sender, text}),
        headers: { 'Content-Type': 'application/json'},
        types: [
            START_MESSAGE_SENDING,
            {
                type: SUCCESS_MESSAGE_SENDING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json,
                ),
            },
            ERROR_MESSAGE_SENDING,
        ],
    }
})

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';

export const loadMessages = () => ({
    [RSAA]: {
        endpoint: '/api/messages',
        method: 'GET',
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json,
                ),
            },
            ERROR_MESSAGES_LOADING,
        ],
    },
 }); 
