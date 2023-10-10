'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
let navHistory: string[] = [];

export function hasHistory(url?: string): boolean{
    return url ? navHistory.includes(url) : navHistory.length > 0;
}

export default function NavigationEvents() {
  const pathname = usePathname()

  useEffect(() => {
    navHistory.push(pathname);
  }, [pathname])

  return null
}