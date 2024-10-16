'use client';

import React from 'react';
import Navigation from '@/components/dashboard/Navigation';
import Discovery from '@/components/dashboard/Discovery';
import { Home, Bell, Mail, User, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const footerItems = [
  { icon: Home, label: 'Home' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-40 w-full border-b bg-card text-card-foreground">
        <div className="flex h-16 items-center justify-between px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <Navigation />
            </SheetContent>
          </Sheet>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex-1 flex">
        {/* Desktop Navigation */}
        <Navigation className="hidden lg:flex lg:w-64 shrink-0 border-r fixed left-0 top-0 h-screen overflow-y-auto" />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 lg:ml-64 lg:mr-80">
          {children}
        </main>

        {/* Desktop Discovery */}
        <Discovery className="hidden lg:block lg:w-80 shrink-0 border-l fixed right-0 top-0 h-screen overflow-y-auto" />
      </div>

      {/* Footer mobile menu */}
      <footer className="lg:hidden sticky bottom-0 z-40 w-full border-t bg-card text-card-foreground">
        <nav className="flex justify-between items-center h-16">
          {footerItems.map((item, index) => (
            <Button key={index} variant="ghost" size="sm" className="flex-1">
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.label}</span>
            </Button>
          ))}
        </nav>
      </footer>
    </div>
  );
}