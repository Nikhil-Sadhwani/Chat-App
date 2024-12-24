"use client";

import { Message, User } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatTime } from "@/lib/date";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface MessageListProps {
  messages: Message[];
  user: User;
  currentUserId: string;
}

export function MessageList({
  messages,
  user,
  currentUserId,
}: MessageListProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-200">
      <div className="p-4 border rounded-md flex flex-col items-start justify-between bg-white mb-2">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="flex space-x-1 mt-2">
          <p>This is the very beginning of your direct message history with </p>
          <span className="text-cyan-700 bg-cyan-300 bg-opacity-25 px-2 py-1 rounded-full text-xs font-bold">
            @{user.name}
          </span>
        </div>
      </div>

      <div className="p-2 border rounded-md bg-white w-fit m-auto text-[12px] font-bold text-muted-foreground">
        Today
      </div>

      {messages.map((message) => {
        const isCurrentUser = message.senderId === currentUserId;

        return (
          <div
            key={message.id}
            className={cn(
              "flex items-start space-x-2",
              isCurrentUser && "flex-row-reverse space-x-reverse"
            )}
          >
            <Avatar className="w-8 h-8">
              {isCurrentUser ? (
                <AvatarImage
                  src={`https://i.pravatar.cc/150?u=${message.id}`}
                  alt="Random Avatar"
                />
              ) : (
                <>
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>
                    {user?.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </>
              )}
            </Avatar>
            <div
              className={cn(
                "relative flex flex-col space-y-1 max-w-[70%]",
                isCurrentUser && "items-end"
              )}
            >
              {!isCurrentUser && (
                <div className="absolute top-2 right-2">
                  <Image
                    src={`/images/${user.icon}`}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </div>
              )}
              <div
                className={cn(
                  "rounded-lg p-3 pr-8 bg-white ",
                  isCurrentUser
                    ? "bg-blue-600 text-primary-foreground"
                    : "bg-accent"
                )}
              >
                <p className="text-sm">{message.content}</p>
                {!isCurrentUser && message.isSmart && (
                  <div className="mt-2 p-3 bg-blue-50 flex space-x-2 justify-between items-center">
                    <p className="flex items-center text-sm text-black font-bold">
                      <MessageCircle className="h-6 w-6 mr-1 text-blue-600" />
                      Smart Response Detected!
                    </p>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="font-bold"
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-blue-600 font-bold text-white"
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              {mounted && (
                <span className="text-xs text-muted-foreground">
                  {formatTime(message.timestamp)}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
