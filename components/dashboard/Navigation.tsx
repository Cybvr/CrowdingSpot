// components/dashboard/Navigation.tsx

'use client'

import React from 'react'
import Image from 'next/image'
import { Home, Bell, Mail, User, Settings, LogOut, List, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: List, label: 'Lists' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
]

export default function Navigation({ className = '' }) {
  return (
    <aside className={`flex flex-col p-4 bg-card text-card-foreground ${className}`}>
      <div className="mb-4">
        <Image src="/images/logos/logo.svg" alt="Logo" width={150} height={50} />
      </div>
      <nav className="flex flex-col space-y-1">
        {navItems.map((item, index) => (
          <Button key={index} variant="ghost" className="justify-start text-base py-2">
            <item.icon className="mr-2 h-4 w-4 text-boldcard" />
            {item.label}
          </Button>
        ))}
      </nav>
      <Button variant="default" className="mt-4 w-full">
        <PlusCircle className="mr-2 h-4 w-4" />
        New Post
      </Button>
      <Button variant="ghost" className="mt-auto justify-start text-base py-2 text-destructive hover:bg-destructive/10">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
      <Card className="mt-4">
        <CardContent className="pt-4">
          <p className="text-sm ">
            @CrowdingSPot is the best way to keep up with what's happening.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full" variant="default">Create account</Button>
          <Button className="w-full" variant="outline">Login</Button>
        </CardFooter>
      </Card>
      <div className="mt-4 text-sm text-muted-foreground flex justify-between">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </aside>
  )
}