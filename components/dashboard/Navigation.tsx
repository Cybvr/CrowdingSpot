'use client'

import React from 'react'
import Image from 'next/image'
import { Home, Bell, Mail, User, Settings, LogOut, Store, PlusCircle, Moon, Sun, GamepadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: Store, label: 'Store' },
  { icon: GamepadIcon, label: 'Games' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
]

export default function Navigation({ className = '' }) {
  const { theme, setTheme } = useTheme()

  return (
    <aside className={`flex flex-col p-4 bg-background text-card-foreground h-full ${className}`}>
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
      <Button variant="default" className="mt-4 w-full hidden md:flex">
        <PlusCircle className="mr-2 h-4 w-4" />
        New Post
      </Button>
      <Card className="mt-4 hidden lg:block">
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
      <div className="mt-auto flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            {theme === 'dark' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
        </div>
        <Button variant="ghost" className="justify-start text-base py-2 text-destructive hover:bg-destructive/10">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}