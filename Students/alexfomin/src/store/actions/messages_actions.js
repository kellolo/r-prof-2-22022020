//export const SEND_MSG = '@@messages/SEND_MSG'
//export const SEND_ANS = '@@messages/SEND_ANS'
import { RSAA, getJSON } from 'redux-api-middleware';

export const START_MESSAGE_SENDING = '@@message/START_MESSAGE_SENDING';
export const SUCCESS_MESSAGE_SENDING = '@@message/SUCCESS_MESSAGE_SENDING';
export const ERROR_MESSAGE_SENDING = '@@message/ERROR_MESSAGE_SENDING';

export const loadMessages = () => ({
   [RSAA]: {
       endpoint: '/message',
       method: 'POST',
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
   },
});

// export let sendMessage = (messageId, sender, text, chatId) => ({
//     type: SEND_MSG,
//     messageId: messageId,
//     sender: sender,
//     text: text,
//     chatId: chatId
// })



// export let sendAnswer = (messageId, sender, text, chatId) => ({
//     type: SEND_ANS,
//     messageId: messageId,
//     sender: sender,
//     text: text,
//     chatId: chatId
// })