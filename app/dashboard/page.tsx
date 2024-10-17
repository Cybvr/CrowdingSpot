'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Repeat, Music, Gift } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const posts = [
  {
    id: 1,
    author: 'John Doe 🚀',
    handle: '@johndoe',
    avatar: '/avatars/user1.jpg',
    videoUrl: 'https://example.com/video1.mp4',
    caption: 'This is my awesome video! #trending #viral',
    songName: 'Awesome Track - Popular Artist',
    timestamp: '2h ago',
    likes: 15,
    comments: 3,
    reposts: 2,
    gifts: 5,
  },
  {
    id: 2,
    author: 'Jane Smith 🌟',
    handle: '@janesmith',
    avatar: '/avatars/user2.jpg',
    videoUrl: 'https://example.com/video2.mp4',
    caption: 'Check out this cool dance! #dance #fun',
    songName: 'Dance Hit - Famous DJ',
    timestamp: '4h ago',
    likes: 32,
    comments: 7,
    reposts: 5,
    gifts: 10,
  },
];

const activeUsers = [
  { id: 1, name: 'User 1 😊', avatar: '/avatars/user1.jpg', status: 'active' },
  { id: 2, name: 'User 2 🎉', avatar: '/avatars/user2.jpg', status: 'live' },
  { id: 3, name: 'User 3 🌈', avatar: '/avatars/user3.jpg', status: 'inactive' },
  { id: 4, name: 'User 4 🔥', avatar: '/avatars/user4.jpg', status: 'active' },
  { id: 5, name: 'User 5 🚀', avatar: '/avatars/user5.jpg', status: 'live' },
  { id: 6, name: 'User 6 💫', avatar: '/avatars/user6.jpg', status: 'active' },
];

const UserAvatar = ({ user }) => {
  return (
    <div className="relative mx-2">
      <Image
        src={user.avatar}
        alt={user.name}
        width={60}
        height={60}
        className="rounded-full border-2 border-white"
      />
      <span 
        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
          user.status === 'active' ? 'bg-green-500' :
          user.status === 'live' ? 'bg-red-500' : 'bg-gray-500'
        }`}
      />
      {user.status === 'live' && (
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-1 rounded">
          Live
        </span>
      )}
    </div>
  );
};

const ActiveUsersCarousel = () => {
  return (
    <div className="flex overflow-x-auto py-4 px-2 bg-card text-card-foreground rounded-lg mb-4 scrollbar-hide">
      {activeUsers.map((user) => (
        <UserAvatar key={user.id} user={user} />
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("my-feed");

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-2 md:px-8 bg-background text-foreground">
      <ActiveUsersCarousel />
      <Tabs defaultValue="my-feed" onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-0 bg-background z-10">
          <div className="overflow-x-auto scrollbar-hide">
            <TabsList className="sticky top-0 w-max inline-flex bg-muted">
              <TabsTrigger value="for-you" className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">🎯 For You</TabsTrigger>
              <TabsTrigger value="my-feed" className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">📱 My Feed</TabsTrigger>
              <TabsTrigger value="community" className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">👥 Community</TabsTrigger>
              <TabsTrigger value="chat" className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">💬 Chat</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="pt-4">
          <TabsContent value="for-you">
            <p className="text-sm sm:text-base text-muted-foreground">Personalized video content will be displayed here.</p>
          </TabsContent>

          <TabsContent value="my-feed">
            {posts.map((post) => (
              <Card key={post.id} className="mb-8 overflow-hidden bg-card text-card-foreground">
                <div className="relative" style={{ paddingBottom: '177.78%' }}>
                  <video 
                    src={post.videoUrl} 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-2">
                    <Button variant="ghost" size="sm" className="rounded-full bg-black/50 text-white p-2">
                      <Heart className="h-6 w-6" />
                    </Button>
                    <span className="text-xs font-semibold text-white">{post.likes}</span>
                    <Button variant="ghost" size="sm" className="rounded-full bg-black/50 text-white p-2">
                      <MessageCircle className="h-6 w-6" />
                    </Button>
                    <span className="text-xs font-semibold text-white">{post.comments}</span>
                    <Button variant="ghost" size="sm" className="rounded-full bg-black/50 text-white p-2">
                      <Repeat className="h-6 w-6" />
                    </Button>
                    <span className="text-xs font-semibold text-white">{post.reposts}</span>
                    <Button variant="ghost" size="sm" className="rounded-full bg-black/50 text-white p-2">
                      <Gift className="h-6 w-6" />
                    </Button>
                    <span className="text-xs font-semibold text-white">{post.gifts}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-20 text-white">
                    <div className="flex items-center mb-2">
                      <Image
                        src={post.avatar}
                        alt={post.author}
                        width={40}
                        height={40}
                        className="rounded-full mr-2"
                      />
                      <div>
                        <p className="font-semibold text-base">{post.author}</p>
                        <p className="text-xs">{post.handle}</p>
                      </div>
                    </div>
                    <p className="text-sm">{post.caption}</p>
                    <div className="flex items-center mt-2">
                      <Music className="h-3 w-3 mr-2" />
                      <p className="text-xs">{post.songName}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="community">
            <p className="text-sm sm:text-base text-muted-foreground">Community video posts and discussions will be displayed here.</p>
          </TabsContent>

          <TabsContent value="chat">
            <p className="text-sm sm:text-base text-muted-foreground">Chat functionality will be implemented here.</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}