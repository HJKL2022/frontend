import { useSetRecoilState } from 'recoil';

import * as S from '@components/AddKeyWordButton/AddKeyWordButton.style';
import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import { portalState } from '@store/portal';

const AddKeywordButton = () => {
  const setPortal = useSetRecoilState(portalState);
  const isKeyword = true;

  const handleClickAddKeywordBtn = () => setPortal('keywordAddress');

  return (
    <Modal isFull={false} type='underRight' customedStyle={S.ModalCustomStyle}>
      <S.Wrapper>
        {isKeyword && (
          <S.AddKeywordWrapper>
            <Icon iconName='AddKeyword' iconSize={7.62} />
          </S.AddKeywordWrapper>
        )}
        <S.AddKeywordBtn onClick={handleClickAddKeywordBtn}>
          <Icon iconName='Plus' iconSize={1.33} />
        </S.AddKeywordBtn>
      </S.Wrapper>
    </Modal>
  );
};

export default AddKeywordButton;
