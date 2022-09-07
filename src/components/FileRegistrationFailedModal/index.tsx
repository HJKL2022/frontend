import { RefObject } from 'react';

import * as S from '@components/FileRegistrationFailedModal/FileRegistrationFailedModal.style';
import Modal from '@components/common/Modal';
interface FileRegistrationFailedModalPropsType {
  modalRef: RefObject<HTMLDivElement>;
  closeAModal: () => void;
}

const FileRegistrationFailedModal = ({
  modalRef,
  closeAModal,
}: FileRegistrationFailedModalPropsType) => {
  return (
    <Modal type='center' isFull={true}>
      <S.Wrapper ref={modalRef}>
        <S.Text>이미지는 최대 5장까지 첨부할 수 있어요</S.Text>
        <S.CloseButton onClick={closeAModal}>닫기</S.CloseButton>
      </S.Wrapper>
    </Modal>
  );
};

export default FileRegistrationFailedModal;
