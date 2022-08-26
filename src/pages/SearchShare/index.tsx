import { useEffect, useState } from 'react';

import axios from 'axios';
import { useRecoilValue } from 'recoil';

import CategoryButton from '@components/CategoryButton';
import FailedContents from '@components/FailedContents';
import PreviewShareListLeftImage from '@components/PreviewShareListLeftImage';
import SearchShareHeader from '@components/SearchShareHeader';
import { API } from '@constants/api';
import { listExample } from '@data/shareList';
import * as S from '@pages/SearchShare/SearchShare.style';
import { currentFilterShareList } from '@store/filterShareList';
import { currentMapKey, searchRecent } from '@store/localStorage';
import { currentLatitudeLongitude } from '@store/location';
import { thumbnailUrlListType } from '@type/shareList';
import { getSortData } from '@utils/ShareListSort';

const SearchShare = () => {
  const curMapKey = useRecoilValue(currentMapKey);
  const curShareFilterList = useRecoilValue(currentFilterShareList);
  const searchRecentMapList = useRecoilValue(searchRecent);
  const searchRecentValue = searchRecentMapList.get(curMapKey).name;
  const { lat, lng } = useRecoilValue(currentLatitudeLongitude);
  const [searchData, setSearchData] = useState<thumbnailUrlListType[]>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${API.SHARE_LIST}`, {
        params: {
          latitude: lat,
          longitude: lng,
          keyword: searchRecentValue,
        },
      });

      setSearchData(data);
    })();
  }, [searchRecentValue]);

  console.log(searchData);

  return (
    <S.Wrapper>
      <S.ListHeader>
        <SearchShareHeader keyWord={searchRecentValue} />
        <CategoryButton />
      </S.ListHeader>
      {searchData?.length ? (
        <S.ListContent>
          <PreviewShareListLeftImage data={getSortData(curShareFilterList, searchData)} />
        </S.ListContent>
      ) : (
        <FailedContents />
      )}
    </S.Wrapper>
  );
};

export default SearchShare;
