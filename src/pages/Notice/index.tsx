import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import Loading from '@components/Loading';
import NoticeActivity from '@components/NoticeActivity';
import NoticeDeleteAllButton from '@components/NoticeDeleteAllButton';
import NoticeDeleteModeButton from '@components/NoticeDeleteModeButton';
import { HeaderBtn } from '@components/NoticeDeleteModeButton/NoticeDeleteModeButton.style';
import NoticeKeyword from '@components/NoticeKeyword';
import Tabs from '@components/Tabs';
import Icon from '@components/common/Icon';
import { failtoGetNoticeMention, noRecentNoticeMention } from '@constants/mentions';
import { NOTICE_CENTER } from '@constants/words';
import * as S from '@pages/Notice/Notice.style';
import { activeNoticeState, newNoticeState, noticeInfoState, noticeState } from '@store/notice';
import { getIsActivityArray } from '@type/notice';

const Notice = () => {
  const navigate = useNavigate();
  const setNewNotice = useSetRecoilState(newNoticeState);
  const noticeTabsInfo = useRecoilValue(noticeInfoState);
  const activeNotice = useRecoilValue(activeNoticeState);
  const NoRecentNotice = <S.NoRecentNoticeWrapper>{noRecentNoticeMention}</S.NoRecentNoticeWrapper>;
  const selector = noticeState<typeof activeNotice>({ type: activeNotice });
  const { state, contents } = useRecoilValueLoadable(selector);
  const idList = state === 'hasValue' ? contents.map(({ id }) => id) : undefined;

  const getNoticeContents = () => {
    switch (state) {
      case 'hasValue':
        if (!contents.length) return NoRecentNotice;
        const isActivity = getIsActivityArray(contents);

        return (
          <>
            {isActivity && <NoticeActivity contents={contents} />}
            {!isActivity && <NoticeKeyword contents={contents} />}
          </>
        );
      case 'hasError':
        return <S.ErrorWrapper>{failtoGetNoticeMention}</S.ErrorWrapper>;
      case 'loading':
        return <Loading color='grey2' size={60} border={6} height='20rem' />;
    }
  };

  // set notice icon show that new notice doesn't exist
  setNewNotice(null);

  return (
    <S.Wrapper>
      <S.TopFixedWrapper>
        <S.Header>
          <HeaderBtn onClick={() => navigate(-1)}>
            <Icon iconName='Back' iconSize={1.125} />
          </HeaderBtn>
          <S.HeaderTitle>{NOTICE_CENTER}</S.HeaderTitle>
          <NoticeDeleteModeButton />
        </S.Header>
        <S.TabsWrapper>
          <Tabs tabsInfo={noticeTabsInfo} targetAtom={activeNoticeState} />
          <NoticeDeleteAllButton idList={idList} />
        </S.TabsWrapper>
      </S.TopFixedWrapper>
      {getNoticeContents()}
    </S.Wrapper>
  );
};

export default Notice;
