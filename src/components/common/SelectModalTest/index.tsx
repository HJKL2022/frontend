import { useEffect, useRef } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';

import Modal from '@components/common/Modal';
import * as S from '@components/common/SelectModalTest/SelectModalTest.style';
import { CANCEL } from '@constants/words';
import useModal from '@hooks/useModal';
import { selectModalInfoState } from '@store/modal';

const SelectModalTest = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSelectModal, setIsSelectModal] = useModal({ modalRef });
  const { trigger, onClickCancelButton, onClickOkButton, okMention, answeringMention } =
    useRecoilValue(selectModalInfoState);
  const resetselectModalInfo = useResetRecoilState(selectModalInfoState);

  const handleClickCancel = () => {
    onClickCancelButton && onClickCancelButton();
    setIsSelectModal(false);
    resetselectModalInfo();
  };

  useEffect(() => {
    setIsSelectModal(true);
  }, [trigger]);

  return isSelectModal ? (
    <Modal type='center' isFull={true}>
      <S.ModalWrapper ref={modalRef}>
        <S.Text>{answeringMention}</S.Text>
        <S.ButtonContainer>
          <S.CloseButton onClick={handleClickCancel}>{CANCEL}</S.CloseButton>
          <S.OkButton onClick={onClickOkButton}>{okMention}</S.OkButton>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </Modal>
  ) : (
    <></>
  );
};

export default SelectModalTest;
