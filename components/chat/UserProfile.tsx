"use client";

import { User } from "@/types/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  Plus,
  ChevronDown,
  X,
  ShoppingCart,
  Clock,
  Search,
  CircleDollarSign,
  Eye,
  User as UserIcon,
  Archive,
  Clover,
  Ellipsis,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { formatTime } from "@/lib/date";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UserProfileProps {
  user: User;
  onAddTag: (tag: string) => void;
}

interface ToggleButtonI {
  id: string;
  text: string;
  active: boolean;
  onClick: () => void;
}

export function UserProfile({ user, onAddTag }: UserProfileProps) {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim()) {
      onAddTag(newTag);
      setNewTag("");
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <div className="relative w-fit m-auto">
          <Avatar className="w-20 h-20 mx-auto relative">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="absolute bottom-[10px] right-[15px] transform translate-x-1/2 translate-y-1/2 bg-blue-500 p-1 rounded-full">
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>

        <h2 className="mt-2 text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-muted-foreground">
          {formatTime(user.lastSeen)} in Ankara, Turkey
        </p>
      </div>

      <div className="space-y-2 mt-2">
        <div className="flex justify-center space-x-1">
          <Button
            variant="ghost"
            size="lg"
            className="flex-1 flex-col items-center"
          >
            <Phone className="h-6 w-6" />
            <p className="text-[15px] mt-1">Call</p>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="flex-1 flex-col items-center"
          >
            <MessageSquare className="h-6 w-6" />
            <p className="text-[15px] mt-1">Video</p>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="flex-1 flex-col items-center"
          >
            <Ellipsis className="h-6 w-6" />
            <p className="text-[15px] mt-1">More</p>
          </Button>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="bg-accent rounded-lg p-3 border bg-white">
              <div className="flex items-center space-x-1 mb-1">
                <CircleDollarSign className="h-4 w-4" />
                <div className="text-sm text-muted-foreground">Revenue</div>
              </div>
              <div className="text-xl font-bold mb-1">
                ${user.revenue.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">3 Orders</div>
            </div>
            <div className="bg-accent rounded-lg p-3 border bg-white">
              <div className="flex items-center space-x-1 mb-1">
                <Eye className="h-4 w-4" />
                <div className="text-sm text-muted-foreground">Web Visits</div>
              </div>
              <div className="text-xl font-bold mb-1">{user.webVisits}</div>
              <div className="text-sm text-muted-foreground">4 Link Clicks</div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Tabs defaultValue="messages" className="flex-1">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="messages">
                <UserIcon className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="archive">
                <Archive className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="history">
                <Clock className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center space-x-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search in general..."
            className="h-8 bg-accent/50 border-0"
          />
        </div>

        <div className="p-3 space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <ChevronDown className="w-4 h-4 mr-1" />
                <h3 className="text-sm font-bold">Information</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-blue-600 font-bold"
              >
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clover className="h-4 w-4" />
                  <span>Segment</span>
                </div>
                <span className="flex space-x-1 font-bold">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Abandoned Cart</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </div>
                <span className="font-bold">{user.email}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>Phone</span>
                </div>
                <span className="font-bold">+90 535 646 81 77</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Last Visited</span>
                </div>
                <span className="font-bold">8 Aug, 2021</span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start font-bold p-0"
            >
              <ChevronDown className="h-4 w-4 mr-1" />
              Show more
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1 font-bold">
                <ChevronDown className="w-4 h-4 mr-1" />
                <h3 className="text-sm font-medium">Tags</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-blue-600 font-bold"
              >
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {user.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-sm font-bold"
                >
                  {tag} <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
