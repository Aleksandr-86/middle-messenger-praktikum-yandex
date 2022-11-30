declare module '*.hbs';
declare module '*.svg';
declare module '*handlebars.runtime';

interface User {
  id: null | number;
  firstName: string;
  secondName: string;
  displayName: string;
  login: string;
  avatar: string;
  email: string;
  phone: string;
}

interface Chat {
  id: number;
  title: string;
  avatar: null | string;
  unreadCount: number;
  lastMessage: null | {
    user: {
      firstName: string;
      secondName: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
}

interface Message {
  chatId: number;
  time: string;
  type: string;
  userId: string;
  content: string;
  file?: null | {
    id: number;
    userId: number;
    path: string;
    filename: string;
    contentType: string;
    contentSize: number;
    uploadDate: string;
  };
}

interface ChatUser {
  id: number;
  firstName: string;
  secondName: string;
  displayName: null | string;
  login: string;
  avatar: string;
  email: string;
  phone: string;
  role: string;
}

interface AppState {
  modal: {
    first: boolean;
    second: boolean;
    third: boolean;
    fourth: boolean;
  };
  isAuth: boolean;
  user: User;

  chats: Chat[];
  chatId: null | number;
  token: null | number;
  messages: Message[];
  chatUsers: ChatUser[];
}
