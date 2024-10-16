'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { PlusCircle, MessageCircle, Heart, Repeat } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const posts = [
  {
    id: 1,
    author: 'John Doe',
    handle: '@johndoe',
    videoUrl: 'https://example.com/video1.mp4',
    timestamp: '2h ago',
    likes: 15,
    comments: 3,
    reposts: 2,
  },
  {
    id: 2,
    author: 'Jane Smith',
    handle: '@janesmith',
    videoUrl: 'https://example.com/video2.mp4',
    timestamp: '4h ago',
    likes: 32,
    comments: 7,
    reposts: 5,
  },
  // Add more video posts as needed
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("my-feed");

  return (
    <div className="max-w-2xl mx-auto">
      <Tabs defaultValue="my-feed" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="for-you">For You</TabsTrigger>
          <TabsTrigger value="my-feed">My Feed</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
        </TabsList>

        <TabsContent value="for-you">
          <h2 className="text-2xl font-bold mb-4">For You</h2>
          {/* Add content for "For You" tab */}
          <p>Personalized video content will be displayed here.</p>
        </TabsContent>

        <TabsContent value="my-feed">
          <h2 className="text-2xl font-bold mb-4">My Feed</h2>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <Input placeholder="What's happening?" className="flex-grow" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="ghost" size="sm">
                <PlusCircle className="h-5 w-5 mr-2" />
                Media
              </Button>
              <Button>Post</Button>
            </CardFooter>
          </Card>

          {posts.map((post) => (
            <Card key={post.id} className="mb-8 overflow-hidden">
              <div className="flex">
                <div className="w-full relative" style={{ paddingBottom: '177.78%' }}>
                  <video 
                    src={post.videoUrl} 
                    controls 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`/avatar-${post.id}.png`} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <Button variant="ghost" size="sm" className="rounded-full bg-black/50 text-white">
                    <Heart className="h-6 w-6" />
                  </Button>
                  <span className="text-xs font-semibold text-white">{post.likes}</span>
                  <Button variant="ghost" size="sm" className="rounded-full bg-black/50 text-white">
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                  <span className="text-xs font-semibold text-white">{post.comments}</span>
                  <Button variant="ghost" size="sm" className="rounded-full bg-black/50 text-white">
                    <Repeat className="h-6 w-6" />
                  </Button>
                  <span className="text-xs font-semibold text-white">{post.reposts}</span>
                </div>
              </div>
              <CardFooter className="flex justify-between items-center p-4">
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.handle}</p>
                </div>
                <span className="text-sm text-gray-500">{post.timestamp}</span>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="community">
          <h2 className="text-2xl font-bold mb-4">Community</h2>
          {/* Add content for "Community" tab */}
          <p>Community video posts and discussions will be displayed here.</p>
        </TabsContent>

        <TabsContent value="chat">
          <h2 className="text-2xl font-bold mb-4">Chat</h2>
          {/* Add content for "Chat" tab */}
          <p>Chat functionality will be implemented here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}