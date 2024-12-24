import { User, Message } from "@/types/chat";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Oğuz Yağız Kara",
    email: "oguz@bluereceipt.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    lastSeen: new Date().toISOString(),
    revenue: 3452,
    webVisits: 42,
    tags: ["Shop Error", "Successful", "Abandoned Cart User"],
    icon: "/instagram-96.png",
    messageStatus: "Sent",
  },
  {
    id: "2",
    name: "George Klein",
    email: "george@example.com",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    lastSeen: new Date().toISOString(),
    revenue: 8750,
    webVisits: 156,
    tags: ["VIP", "Enterprise"],
    icon: "/messenger-96.png",
    messageStatus: "Reached",
  },
  {
    id: "3",
    name: "847-401-1944",
    email: "customer@example.com",
    avatar: "",
    lastSeen: new Date().toISOString(),
    revenue: 1200,
    webVisits: 28,
    tags: ["New Customer"],
    icon: "/whatsapp-96.png",
    messageStatus: "Seen",
  },
  {
    id: "4",
    name: "Ergad Bagbag",
    email: "ergad@example.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    lastSeen: new Date().toISOString(),
    revenue: 5600,
    webVisits: 89,
    tags: ["Premium"],
    icon: "/instagram-96.png",
    messageStatus: "Sent",
  },
];

export const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "1",
    receiverId: "current",
    content:
      "I keep getting 'error while creating a new pop up' for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart",
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    isRead: true,
    isSmart: true,
  },
  {
    id: "2",
    senderId: "2",
    receiverId: "current",
    content: "Wow, this is really epic man! Thank you so much for your help!",
    timestamp: new Date(Date.now() - 54 * 60000).toISOString(),
    isRead: true,
  },
  {
    id: "3",
    senderId: "3",
    receiverId: "current",
    content: "Haha oh man, this is amazing!",
    timestamp: new Date(Date.now() - 141 * 60000).toISOString(),
    isRead: false,
  },
  {
    id: "4",
    senderId: "4",
    receiverId: "current",
    content:
      "There will be changes to next week's presentation due to the recent policy updates.",
    timestamp: new Date(Date.now() - 141 * 60000).toISOString(),
    isRead: true,
  },
  {
    id: "5",
    senderId: "current",
    receiverId: "1",
    content:
      "Hey, let me help you with that error. Can you provide more details about what you're trying to do?",
    timestamp: new Date(Date.now() - 2 * 60000).toISOString(),
    isRead: true,
    isSmart: true,
  },
];
