"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SignUpDialog } from '@/components/SignUpDialog'
import { ArrowRight, Newspaper } from 'lucide-react'
import { PricingModal } from '@/components/PricingModal'
import { ContactModal } from '@/components/ContactModal'

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      localStorage.setItem('auth', 'true')
      localStorage.setItem('role', 'admin')
      router.push('/')
    } else if (credentials.username === 'user' && credentials.password === 'user') {
      localStorage.setItem('auth', 'true')
      localStorage.setItem('role', 'user')
      router.push('/')
    } else {
      alert('Kullanıcı adı veya şifre yanlış!')
    }
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md border-b shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Newspaper className="h-6 w-6 text-primary transition-colors duration-300" />
              <span className="text-xl font-bold text-gray-900">HaberAI</span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-2">
              <PricingModal />
              <ContactModal />
            </nav>
          </div>
        </div>
      </header>

      <main className="min-h-screen flex flex-col md:flex-row pt-[4rem]">
        {/* Welcome Section */}
        <div className="w-full md:w-1/2 bg-blue-100 from-primary/5 to-primary/10 p-8 md:p-12 flex items-center">
          <div className="max-w-xl mx-auto space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Sosyal Medya İçeriklerini
              <span className="text-primary block mt-2">Habere Dönüştürün</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Yapay zeka destekli içerik üretim platformumuz ile sosyal medya gönderilerini
              profesyonel haber içeriklerine dönüştürün.
            </p>
            <div className="h-1 w-20 bg-primary/20 rounded-full" />
            <p className="text-gray-500">
              Tek tıkla içerik üretin, düzenleyin ve yayınlayın.
              İş akışınızı otomatikleştirin ve zamandan tasarruf edin.
            </p>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                HaberAI
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Yönetim Paneli
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div className="group">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Kullanıcı Adı
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg 
                      placeholder-gray-500 text-gray-900 transition duration-300 ease-in-out
                      focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                      hover:border-primary/50"
                    placeholder="Kullanıcı adınızı giriniz"
                    value={credentials.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="group">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Şifre
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg 
                      placeholder-gray-500 text-gray-900 transition duration-300 ease-in-out
                      focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                      hover:border-primary/50"
                    placeholder="Şifrenizi giriniz"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="group relative w-full flex items-center justify-center py-3 px-4 
                    border border-transparent text-sm font-medium rounded-lg text-white 
                    bg-primary hover:bg-primary/90 transition duration-300 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Giriş Yap
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <SignUpDialog>
                  <button
                    type="button"
                    className="w-full text-sm text-primary hover:text-primary/90 underline transition duration-300"
                  >
                    Kayıt Ol
                  </button>
                </SignUpDialog>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
} 