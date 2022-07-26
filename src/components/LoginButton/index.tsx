import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import { modalState } from '@store/portal';

import * as S from './LoginButton.style';

const LOGIN = 'LOGIN';
const loginMention = '카카오로 로그인하고\n여러 사람들과 쉐어하기\n🍕🍕🍕🍕';
const kakaoLoginMention = '카카오로 로그인';

const LoginButton = () => {
  const [isPortal, setIsPortal] = useRecoilState(modalState);

  return (
    <button onClick={() => setIsPortal(true)}>
      {LOGIN}
      <Portal setIsPortal={setIsPortal} isPortal={isPortal} type='modal'>
        <S.LoginWrapper>
          {loginMention}
          <S.KakaoLoginButton>{kakaoLoginMention}</S.KakaoLoginButton>
        </S.LoginWrapper>
      </Portal>
    </button>
  );
};

export default LoginButton;
