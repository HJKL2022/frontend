import { MouseEvent, TouchEvent, useRef, useState } from 'react';

import moment from 'moment';
import 'moment/locale/ko';
import { useNavigate } from 'react-router-dom';
import { v4 as createRandomKey } from 'uuid';

import * as S from '@components/ChatroomsItem/ChatroomsItem.style';
import { chatroomType } from '@store/chatrooms';

const ChatroomsItem = ({
  id,
  shareThumbnailImageUrl,
  currentRecruitment,
  recentMessage,
  recentMessageDataTime,
  recruitmentMemberNicknames,
  recruitmentMemberImageUrls,
  unreadCount,
}: chatroomType) => {
  const navigate = useNavigate();
  const [startPoint, setStartPoint] = useState(0);
  const [moving, setMoving] = useState<S.MovingType>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const diffTime = moment(recentMessageDataTime).fromNow();
  const recruitmentMemberNicknamesJoined = recruitmentMemberNicknames.join(', ');
  const recruitmentMemberImages = recruitmentMemberImageUrls.map((img) => (
    <S.ImgWrapper key={createRandomKey()}>
      <img src={img} />
    </S.ImgWrapper>
  ));

  const changeInnerLeft = (distance: number) => {
    if (!startPoint || !wrapperRef.current) return;
    if (distance >= 20) setMoving('left');
    if (distance > 0 && distance < 20) wrapperRef.current.style.left = `-${distance / 10}px`;
    if (distance < 0 && distance > -20) wrapperRef.current.style.left = `${distance / 10}px`;
    if (distance <= -20) setMoving('right');
  };

  const handleMoveEnd = (distance: number) => {
    if (distance >= 20) {
      setMoving('left');
    } else {
      wrapperRef.current && (wrapperRef.current.style.left = '0');
    }

    setStartPoint(0);
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => setStartPoint(event.screenX);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) =>
    setStartPoint(event.touches[0].screenX);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) =>
    changeInnerLeft(startPoint - event.screenX);

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) =>
    changeInnerLeft(startPoint - event.touches[0].screenX);

  const handleMouseLeaveOrUp = (event: MouseEvent<HTMLDivElement>) =>
    handleMoveEnd(startPoint - event.screenX);

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) =>
    handleMoveEnd(startPoint - event.changedTouches[0].screenX);

  return (
    <S.OuterWrapper>
      <S.InnerWrapper
        ref={wrapperRef}
        moving={moving}
        onTouchMove={handleTouchMove}
        onTouchStartCapture={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseLeave={handleMouseLeaveOrUp}
        onClick={() => navigate(`/chatroom-detail/${id}`)}
      >
        <S.ShowedWrapper>
          <S.InfoWrapper>
            <S.ImgsWrapper count={recruitmentMemberImages.length}>
              {recruitmentMemberImages}
            </S.ImgsWrapper>
            <S.TextWrapper>
              <S.TextUpper>
                <S.WritersNames>{recruitmentMemberNicknamesJoined}</S.WritersNames>
                <S.WritersCount>{currentRecruitment}</S.WritersCount>
                <S.Time>{diffTime}</S.Time>
              </S.TextUpper>
              <S.Content>{recentMessage}</S.Content>
            </S.TextWrapper>
          </S.InfoWrapper>
          <S.ShareImgWrapper>
            <img src={shareThumbnailImageUrl} />
          </S.ShareImgWrapper>
        </S.ShowedWrapper>
        <S.ExitBtn>나가기</S.ExitBtn>
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

export default ChatroomsItem;
