'use client'

import { useEffect, ReactNode } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

let navHistory: string[] = [];
export let lastIndexScroll: number = 0;

export function hasHistory(url?: string): boolean{
    return url ? navHistory.includes(url) : navHistory.length > 0;
}

export function LinkSaveScroll({href, className, children}: {
  href: string,
  className?: string,
  children: ReactNode
}) {
  const saveScroll = () => {
    lastIndexScroll = window.scrollY;
  }

  return(
    <Link href={href} className={className} onClick={saveScroll}>
      {children}
    </Link>
  )
}

export default function NavigationEvents() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = Number(searchParams.get("scrollTo"));
    if(scrollTo){
      window.scrollTo(0, scrollTo);
      router.replace(pathname, { scroll: false });
    }
    navHistory.push(pathname);
  }, [pathname])

  return null
}