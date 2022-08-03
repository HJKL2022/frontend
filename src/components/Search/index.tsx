import { useRef, FormEvent, useState, ChangeEvent } from 'react';

import { useRecoilState } from 'recoil';

import Portal from '@components/Portal';
import SearchPopular from '@components/SearchPopular';
import SearchRecent from '@components/SearchRecent';
import Icon from '@components/common/Icon';
import { inputKeyword } from '@constants/mentions';
import { searchRecent } from '@store/localStorage';
import { fullState } from '@store/portal';
import { getMonthDate } from '@utils/getTime';
import { setLocalStorageInfo, SEARCH_RECENT_KEY } from '@utils/useLocalStorage';

import * as S from './Search.style';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPortal, setIsPortal] = useRecoilState(fullState);
  const [recentListInfoMap, setRecentListInfoMap] = useRecoilState(searchRecent);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent | string) => {
    let value;

    if (typeof event === 'string') {
      value = event;
    } else {
      event.preventDefault();
      value = inputValue;
      if (!value.length) return;
    }

    recentListInfoMap.set(value, { name: value, date: getMonthDate() });

    setLocalStorageInfo({ key: SEARCH_RECENT_KEY, info: [...recentListInfoMap] });
    setRecentListInfoMap(() => recentListInfoMap);
    setInputValue('');
    setIsPortal(false);
  };

  return (
    <Portal type='full' isPortal={isPortal} setIsPortal={setIsPortal} closeBtn={closeBtn}>
      <S.Wrapper>
        <S.Header>
          <S.FormWrapper>
            <S.CloseBtn ref={closeBtn}>
              <Icon iconName='Back' iconSize='MEDIUM' />
            </S.CloseBtn>
            <S.Form onSubmit={handleSubmit}>
              <S.Input value={inputValue} onChange={handleChangeInput} placeholder={inputKeyword} />
              <S.SubmitBtn></S.SubmitBtn>
            </S.Form>
          </S.FormWrapper>
          <SearchPopular clickHandler={handleSubmit} />
        </S.Header>
        <SearchRecent clickHandler={handleSubmit} />
      </S.Wrapper>
    </Portal>
  );
};

export default Search;
