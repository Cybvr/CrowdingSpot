'use client'

import React, { useState } from 'react'
import { Search, Sparkles, Users } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Discovery({ className = '' }) {
  const [searchTerm, setSearchTerm] = useState('')

  const trendingTopics = [
    { id: 1, name: 'Technology', count: 1234 },
    { id: 2, name: 'Sports', count: 987 },
    { id: 3, name: 'Entertainment', count: 765 },
    { id: 4, name: 'Science', count: 543 },
    { id: 5, name: 'Politics', count: 321 },
  ]

  const suggestedUsers = [
    { id: 1, name: 'John Doe', username: '@johndoe', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Jane Smith', username: '@janesmith', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Bob Johnson', username: '@bobjohnson', avatar: '/api/placeholder/32/32' },
  ]

  return (
    <aside className={`flex flex-col p-6 bg-card text-card-foreground ${className}`}>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4">Discover</h2>
        </section>
        <section>
          <h3 className="text-md font-semibold mb-3 flex items-center">
            <Sparkles className="mr-2 h-5 w-5" />
            Trending Topics
          </h3>
          <ul className="space-y-2">
            {trendingTopics.map((topic) => (
              <li key={topic.id} className="text-sm flex justify-between items-center">
                <span>{topic.name}</span>
                <span className="text-muted-foreground">{topic.count}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-md font-semibold mb-3 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Suggested Users
          </h3>
          <ul className="space-y-3">
            {suggestedUsers.map((user) => (
              <li key={user.id} className="flex items-center">
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                <div className="flex-grow">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.username}</p>
                </div>
                <Button variant="outline" size="sm">Follow</Button>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="mt-16 text-sm text-muted-foreground flex justify-left">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </aside>
  )
}