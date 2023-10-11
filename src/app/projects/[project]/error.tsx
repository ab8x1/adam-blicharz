'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
}: {
  error: Error
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className='container' style={{maxWidth: '930px'}}>
      <h1 style={{textAlign: 'center', margin: '200px 50px'}}>Project not found</h1>
    </main>
  )
}