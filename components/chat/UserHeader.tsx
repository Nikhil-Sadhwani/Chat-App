"use client";

import { MoreVertical, Check, ChevronDown, Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/chat";
import Image from "next/image";

interface UserHeaderProps {
  user: User;
}

export function UserHeader({ user }: UserHeaderProps) {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="px-3 py-1 flex items-center space-x-1 border border-gray-400">
          <Image
            src={`/images/${user.icon}`}
            alt="icon"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium">Messenger</span>
          <ChevronDown className="h-4 w-4 mr-1" />
        </div>
        <Check className="h-4 w-4" />
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
        <Avatar className="h-5 w-5">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <ChevronDown className="h-4 w-4 mr-1" />
        <Info className="h-4 w-4" />
      </div>
    </div>
  );
}
