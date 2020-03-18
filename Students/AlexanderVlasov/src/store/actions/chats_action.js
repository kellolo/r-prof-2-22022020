import { RSAA, getJSON } from 'redux-api-middleware';

export const START_CHATS_ADDING = '@@chats/START_CHATS_ADDING';
export const SUCCESS_CHATS_ADDING = '@@chats/SUCCESS_CHATS_ADDING';
export const ERROR_CHATS_ADDING = '@@chats/ERROR_CHATS_ADDING';

export let addChat = (title) => ({
    [RSAA]: {
        endpoint: `/api/chat`,
        method: 'POST',
        body: JSON.stringify({title}),
        headers: { 'Content-Type': 'application/json'},
        types: [
            START_CHATS_ADDING,
            {
                type: SUCCESS_CHATS_ADDING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json,
                ),
            },
            ERROR_CHATS_ADDING,
        ],
    }
})

export const START_CHATS_DELETING = '@@chats/START_CHATS_DELETING';
export const SUCCESS_CHATS_DELETING = '@@chats/SUCCESS_CHATS_DELETING';
export const ERROR_CHATS_DELETING = '@@chats/ERROR_CHATS_DELETING';

export let delChat = (chatId) => ({
    [RSAA]: {
        endpoint: `/api/chat/${chatId}`,
        method: 'DELETE',
        types: [
            START_CHATS_DELETING,
            {
                type: SUCCESS_CHATS_DELETING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json,
                ),
            },
            ERROR_CHATS_DELETING,
        ],
    },
})


export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chats/ERROR_CHATS_LOADING';

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(
                    json => json,
                ),
            },
            ERROR_CHATS_LOADING,
        ],
    },
 }); 