"use client";

import { useState } from "react";
import { Smile, Paperclip, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MessageInputProps {
  onSend: (message: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 border-t bg-background">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border-none mb-2"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <div className="flex items-center justify-between space-x-2">
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost">
                <Smile className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid grid-cols-8 gap-2 p-2">
                {/* Emoji picker content would go here */}
              </div>
            </PopoverContent>
          </Popover>
          <Button size="icon" variant="ghost">
            <Paperclip className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex space-x-2 items-center text-muted-foreground">
          <Button size="icon" variant="ghost" onClick={handleSend}>
            <Send className="h-5 w-5" />
          </Button>
          <span>|</span>
          <ChevronDown className="h-4 w-4 mr-1" />
        </div>
      </div>
    </div>
  );
}
