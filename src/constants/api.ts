export const API = {
  SHARE_LIST: `/api/shares`,
  SHARE_REGISTRATION: `/api/shares`,
  SHARE_DETAIL: (id?: string) => `/api/shares/${id}`,
  SHARE_RECOMMENDED: `/api/shares/recommendation`,
  SHARE_MINE: '/api/shares/mine',
  CHATROOMS: '/api/chatrooms',
  CHATROOM_MEMBERS: '/api/chatroom-members',
  SOCKET: '/api/socket',
  LOGIN_FORM: '/login/form',
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
  CHECK_LOGIN: '/api/reissue/access-token',
  WISH_LIST: '/api/wish-list',
  MY_SHARE: '/api/shares/mine',
  KEYWORD: '/api/keywords',
  ADD_KEYWORD: '/api/keywords',
  DELETE_KEYWORD: '/api/keywords',
  REGISTERED_KEYWORDS: '/api/keywords/location',
  DELETE_REGISTERED_KEYWORDS: (id: number) => `/api/keywords/${id}`,
  NOTICE: '/api/notifications',
  NOTICE_ACTIVITY: '/api/notifications/activity',
  NOTICE_KEYWORD: '/api/notifications/keyword',
};
