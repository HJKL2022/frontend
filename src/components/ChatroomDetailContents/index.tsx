import { useEffect, useRef, useState } from 'react';

import moment from 'moment';
import { v4 as createRandomKey } from 'uuid';

import Chat from '@components/Chat';
import * as S from '@components/ChatroomDetailContents/ChatroomDetailContents.style';
import { connectChat } from '@socket/chatroomSocket';
import { ChatroomDetailChatsType, ChatroomDetailChatType } from '@type/chat';

type ChatroomDetailContentsPropsType = {
  chats: ChatroomDetailChatsType;
  chatroomId: string;
  scrollToBottomRef: (lastChat: HTMLDivElement) => void;
};

const ChatroomDetailContents = ({
  chats,
  chatroomId,
  scrollToBottomRef,
}: ChatroomDetailContentsPropsType) => {
  const [curChats, setCurChats] = useState(chats);
  const dateRef = useRef('');

  const getSingleChat = (info: ChatroomDetailChatType) => {
    const { writtenDateTime } = info;
    const curDate = writtenDateTime.split(' ')[0];
    const isSameDate = curDate === dateRef.current;
    if (isSameDate) {
      return <Chat {...info} key={createRandomKey()} />;
    } else {
      dateRef.current = curDate;
      const showedDate = moment(curDate).format('YYYY년 MM월 DD일');
      return (
        <>
          {!isSameDate && <S.Date>{showedDate}</S.Date>}
          <Chat {...info} key={createRandomKey()} />
        </>
      );
    }
  };

  const chatroomLogs = curChats.map(getSingleChat);

  useEffect(() => {
    const { chatroomDisconnect, chatroomConnect } = connectChat();
    chatroomConnect({ setter: setCurChats, chatroomId });
    return () => chatroomDisconnect();
  }, []);

  return (
    <S.Wrapper>
      {chatroomLogs}
      <S.EmptyBlock ref={scrollToBottomRef} />
    </S.Wrapper>
  );
};

export default ChatroomDetailContents;
