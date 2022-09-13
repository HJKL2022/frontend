import { useRecoilValue } from 'recoil';

import { activeShareList } from '@store/filterShareList';

const useShareListTabsInfo = () => {
  const activeShareListValue = useRecoilValue(activeShareList);
  const shareListTabs = [
    {
      title: '배달쉐어',
      value: 'delivery' as const,
      active: activeShareListValue === 'delivery',
    },
    {
      title: '재료쉐어',
      value: 'ingredient' as const,
      active: activeShareListValue === 'ingredient',
    },
  ];

  return shareListTabs;
};

export default useShareListTabsInfo;
