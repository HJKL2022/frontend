import { ACCESS_TOKEN, ADDRESS_RECENT, REFRESH_TOKEN, SEARCH_RECENT } from '@constants/words';

export type LocalStorageKeyType =
  | typeof SEARCH_RECENT
  | typeof ACCESS_TOKEN
  | typeof REFRESH_TOKEN
  | typeof ADDRESS_RECENT;

export const getLocalStorageInfo = (key: LocalStorageKeyType) => {
  const data = window.localStorage.getItem(key);
  const info = data && JSON.parse(data);

  return info;
};

export const setLocalStorageInfo = ({ key, info }: { key: LocalStorageKeyType; info: any }) => {
  window.localStorage.setItem(key, JSON.stringify(info));
};

export const removeLocalStorageInfo = ({ key }: { key: LocalStorageKeyType }) => {
  window.localStorage.removeItem(key);
};
