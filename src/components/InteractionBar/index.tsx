import * as S from '@components/InteractionBar/InteractionBar.style';
import Icon from '@components/common/Icon';
import { CHATTING, PARTICIPATING } from '@constants/words';
import { getPriceType } from '@utils/getPriceType';

const price = 10000;
const originPrice = 20000;

const InteractionBar = () => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <Icon iconName='HeartEmpty' iconSize='MEDIUM' />
        <S.PriceWrapper>
          <div>{getPriceType({ price, isUnit: true })}</div>
          <div>{getPriceType({ price: originPrice, isUnit: true })}</div>
        </S.PriceWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Button>{CHATTING}</S.Button>
        <S.Button>{PARTICIPATING}</S.Button>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default InteractionBar;
