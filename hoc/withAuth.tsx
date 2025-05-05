"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// Simple loading component
function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAuthComponent(props: P) {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
      const auth = localStorage.getItem('auth')
      setIsAuthenticated(auth === 'true')
      
      if (auth !== 'true') {
        router.push('/login')
      }
    }, [router])

    // Show loading state while checking authentication
    if (isAuthenticated === null) {
      return <Loading />
    }

    // Only render the wrapped component if authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }
} 