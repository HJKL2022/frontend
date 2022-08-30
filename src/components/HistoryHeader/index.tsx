import { useNavigate } from 'react-router-dom';

import * as S from '@components/HistoryHeader/HistoryHeader.style';
import Icon from '@components/common/Icon';

const HistoryHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  const handleClickGoBack = () => navigate(-1);
  return (
    <S.Wrapper>
      <Icon iconName='Back' handleClick={handleClickGoBack} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};

export default HistoryHeader;
