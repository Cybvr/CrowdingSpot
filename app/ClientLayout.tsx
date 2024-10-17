'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  // You can add client-side logic here, like updating active navigation items based on pathname

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* You can add client-side only components here, like a navigation bar */}
      <main>{children}</main>
    </ThemeProvider>
  );
}