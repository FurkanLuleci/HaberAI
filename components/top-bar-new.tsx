"use client"

import React, { useState } from 'react'
import { Search, Menu, ChevronDown } from "lucide-react"

interface TopBarProps {
  toggleSidebar: () => void
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  return (
    <div className="border-b bg-white sticky top-0 z-10">
      <div className="flex h-16 items-center px-4 md:px-6 justify-between">
        <div className="flex items-center gap-4 lg:gap-6">
          <button 
            className="p-2 rounded-md hover:bg-gray-100 md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input 
              type="search" 
              placeholder="Ara..." 
              className="w-[200px] sm:w-[300px] h-9 rounded-md border border-gray-200 px-8 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end mr-1 hidden sm:flex">
            <span className="font-medium text-sm">Furkan Lüleci</span>
            <span className="text-xs text-gray-500">Pro Plan - 128/2000</span>
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="/images/profile.jpg" 
                  alt="Furkan Lüleci"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>'
                  }}
                />
              </div>
              <ChevronDown className="h-4 w-4 ml-1 hidden md:block" />
            </button>
            
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 py-1 bg-white rounded-md shadow-lg border z-20">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium">Hesabım</p>
                    <p className="text-xs text-gray-500 sm:hidden">Pro Plan - 128/2000</p>
                  </div>
                  <DropdownItem>Profil</DropdownItem>
                  <DropdownItem>Ayarlar</DropdownItem>
                  <DropdownItem>Abonelik</DropdownItem>
                  <div className="border-t my-1" />
                  <DropdownItem>Çıkış Yap</DropdownItem>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface DropdownItemProps {
  children: React.ReactNode
  onClick?: () => void
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <button
      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TopBar 