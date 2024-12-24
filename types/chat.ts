export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  lastSeen: string;
  revenue: number;
  webVisits: number;
  tags: string[];
  icon: string;
  messageStatus: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isSmart?: boolean;
}

export interface ChatState {
  selectedUserId: string | null;
  messages: Message[];
  users: User[];
}
