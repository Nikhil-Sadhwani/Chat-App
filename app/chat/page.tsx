"use client";

import { useState } from "react";
import { UserListItem } from "@/components/chat/UserListItem";
import { MessageList } from "@/components/chat/MessageList";
import { MessageInput } from "@/components/chat/MessageInput";
import { UserProfile } from "@/components/chat/UserProfile";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { UserHeader } from "@/components/chat/UserHeader";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { mockUsers, mockMessages } from "@/lib/mock-data";

export default function ChatPage() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);

  const selectedUser = mockUsers.find((user) => user.id === selectedUserId);

  const selectedMessages = mockMessages.filter(
    (message) =>
      (message.senderId === selectedUserId &&
        message.receiverId === "current") ||
      (message.senderId === "current" && message.receiverId === selectedUserId)
  );

  const handleSendMessage = (content: string) => {
    console.log("Sending message:", content);
  };

  const handleAddTag = (tag: string) => {
    console.log("Adding tag:", tag);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Left Panel */}
      <div
        className={`w-80 border-r ${
          showLeftPanel ? "block" : "hidden"
        } md:block`}
      >
        <div className="h-full flex flex-col">
          <ChatHeader />
          <div className="flex-1 overflow-y-auto">
            {mockUsers.map((user) => (
              <UserListItem
                key={user.id}
                user={user}
                lastMessage={mockMessages.find(
                  (m) => m.senderId === user.id || m.receiverId === user.id
                )}
                isSelected={user.id === selectedUserId}
                onClick={() => setSelectedUserId(user.id)}
                hasUnread={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center Panel */}
      <div className="flex-1 flex flex-col">
        <div className="border-b">
          {/* <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowLeftPanel(!showLeftPanel)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div> */}
          {selectedUser && <UserHeader user={selectedUser} />}
        </div>
        {selectedUser ? (
          <>
            <MessageList
              messages={selectedMessages}
              user={selectedUser}
              currentUserId="current"
            />
            <MessageInput onSend={handleSendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a conversation to start chatting
          </div>
        )}
      </div>

      {/* Right Panel */}
      {selectedUser && (
        <div
          className={`w-80 border-l ${
            showRightPanel ? "block" : "hidden"
          } md:block`}
        >
          <UserProfile user={selectedUser} onAddTag={handleAddTag} />
        </div>
      )}
    </div>
  );
}
