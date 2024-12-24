"use client";

import { Search, Plus, Filter, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ChatHeader() {
  return (
    <div className="p-4 border-b space-y-4">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-lg">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">BlueChat</span>
            <span className="text-muted-foreground text-sm">Inbox</span>
          </div>
        </div>
        <div className="flex-1" />
        <Button variant="ghost" size="icon">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="border border-gray-400">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Tabs defaultValue="messages" className="flex-1">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="segments">Segments</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 text-sm">
          <Button variant="ghost" size="sm" className="h-8">
            <Users className="h-4 w-4 mr-2" />
            All
          </Button>
          <span className="text-cyan-700 bg-cyan-300 bg-opacity-25 px-2 py-1 rounded-full text-xs font-bold">
            232
          </span>
          <ChevronDown className="h-4 w-4 mr-1" />
        </div>
        <div className="flex-1 space-x-1" />
        <Button variant="ghost" size="sm" className="h-8">
          <Filter className="h-4 w-4 mr-2" />
          Oldest
        </Button>
        <ChevronDown className="h-4 w-4 mr-2" />
      </div>
    </div>
  );
}
