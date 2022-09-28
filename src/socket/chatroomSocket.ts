import { Dispatch, SetStateAction } from 'react';

import SockJs from 'sockjs-client';
import StompJs from 'stompjs';

import { APP, CHAT, CHATROOMS, CHATROOM_MEMBERS, TOPIC, WEBSOCKET } from '@constants/words';
import { getAuthHeaders } from '@utils/getAuthHeaders';

import { ChatroomDetailChatsType } from './../type/chat';

type subscribeParamsType = {
  setter: Dispatch<SetStateAction<ChatroomDetailChatsType>>;
  chatroomId: string;
};

type SendChatParamsType = { contents: string; chatroomId?: string };

const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
const sock = new SockJs(sockServer);
const stompClient = StompJs.over(sock);

export const sendChat = ({ contents, chatroomId }: SendChatParamsType) => {
  const headers = getAuthHeaders();
  const sendingURL = `/${APP}/${CHATROOMS}/${chatroomId}/${CHAT}`;

  stompClient.send(sendingURL, headers, JSON.stringify({ contents }));
};

export const connectChat = () => {
  const sockServer = `${process.env.REACT_APP_BASE_URL}/${WEBSOCKET}`; // 들어갈 주소 설정
  const sock = new SockJs(sockServer);
  const stompClient = StompJs.over(sock);

  const subscribeChat = ({ setter, chatroomId }: subscribeParamsType) => {
    const subscribeURL = `/${TOPIC}/${CHATROOM_MEMBERS}/${chatroomId}`;
    const headers = getAuthHeaders();

    stompClient.subscribe(
      subscribeURL,
      (chatData) => {
        const newChat = JSON.parse(chatData.body);

        setter((chats) => {
          const newChats = [...chats, newChat];

          return newChats;
        });
      },
      headers,
    );
  };

  const unsubscribe = () => {
    stompClient.unsubscribe('sub-0');
  };

  const chatroomConnect = (subscribeParams: subscribeParamsType) => {
    const headers = getAuthHeaders();

    try {
      // stompClient.debug = () => null;
      stompClient.connect(headers, () => subscribeChat(subscribeParams));
    } catch (error) {
      console.log(error);
    }
  };

  const chatroomDisconnect = () => {
    try {
      // stompClient.debug = () => null;
      stompClient.disconnect(() => unsubscribe());
    } catch (error) {
      console.log(error);
    }
  };

  return { chatroomConnect, chatroomDisconnect };
};
