declare module '*.hbs';
declare module '*.svg';
declare module '*handlebars.runtime';

interface User {
  id: number | null;
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
  avatar: string | null;
  unreadCount: number;
  lastMessage: {
    user: {
      firstName: string;
      secondName: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    } | null;
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
  file?: {
    id: number;
    userId: number;
    path: string;
    filename: string;
    contentType: string;
    contentSize: number;
    uploadDate: string;
  } | null;
}

interface ChatUser {
  id: number;
  firstName: string;
  secondName: string;
  displayName: string | null;
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
  chatId: number | null;
  token: number | null;
  messages: Message[];
  chatUsers: ChatUser[];
  usersCards: Record<string, string>[];
}
