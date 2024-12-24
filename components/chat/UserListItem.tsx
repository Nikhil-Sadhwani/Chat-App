"use client";

import { User, Message } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { formatTime } from "@/lib/date";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, CheckCheck } from "lucide-react";

interface UserListItemProps {
  user: User;
  lastMessage?: Message;
  isSelected: boolean;
  onClick: () => void;
  hasUnread: boolean;
}

export function UserListItem({
  user,
  lastMessage,
  isSelected,
  onClick,
  hasUnread,
}: UserListItemProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center space-x-4 p-4 cursor-pointer hover:bg-accent/50 transition-colors",
        isSelected && "bg-accent"
      )}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        {hasUnread && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <div className="flex">
            <h4 className="text-sm font-semibold truncate mr-1">{user.name}</h4>
            <Image
              src={`/images/${user.icon}`}
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          {lastMessage && mounted && (
            <>
              <span className="text-xs text-muted-foreground">
                {formatTime(lastMessage.timestamp)}
              </span>
            </>
          )}
        </div>
        {lastMessage && (
          <div className="flex space-x-1 justify-between">
            <p className="text-sm text-muted-foreground truncate">
              {lastMessage.content}
            </p>
            {user.messageStatus === "Sent" ? (
              <Check className="shrink-0 w-4 h-4" />
            ) : user.messageStatus === "Reached" ? (
              <CheckCheck className="shrink-0 w-4 h-4" />
            ) : user.messageStatus === "Seen" ? (
              <CheckCheck className="shrink-0 w-4 h-4 text-blue-600" />
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
