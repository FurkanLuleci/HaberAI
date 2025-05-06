"use client"

import React from 'react'
import { Home, Users, BarChart2, Settings, LogOut, FileText, Link2, Video, Menu, X } from "lucide-react"
import { TakipEkleModal } from '@/components/TakipEkleModal'

interface SidebarProps {
  onViewChange: (view: string) => void
  activeView: string
  isOpen: boolean
  toggleSidebar: () => void
  onLogout: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onViewChange, activeView, isOpen, toggleSidebar, onLogout }) => {
  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-20 h-full w-64 bg-white border-r transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-16'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-md p-1">
              <BarChart2 className="h-6 w-6 text-white" />
            </div>
            {isOpen && <span className="text-xl font-bold">HaberAI</span>}
          </div>
          <button 
            onClick={toggleSidebar} 
            className="md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col space-y-1 p-2">
          <SidebarItem 
            icon={<Home className="h-5 w-5" />}
            text="Ana Sayfa"
            isActive={activeView === "dashboard"}
            onClick={() => onViewChange("dashboard")}
            collapsed={!isOpen}
          />
          <SidebarItem 
            icon={<Users className="h-5 w-5" />}
            text="Takip Listesi"
            isActive={activeView === "watchlist"}
            onClick={() => onViewChange("watchlist")}
            collapsed={!isOpen}
          />
          
          {/* Takip Ekle Modal */}
          <TakipEkleModal collapsed={!isOpen} />

          <SidebarItem 
            icon={<FileText className="h-5 w-5" />}
            text="Haber Oluştur"
            isActive={activeView === "create-news"}
            onClick={() => onViewChange("create-news")}
            collapsed={!isOpen}
          />
          <SidebarItem 
            icon={<Link2 className="h-5 w-5" />}
            text="API Entegrasyonları"
            isActive={activeView === "api-integrations"}
            onClick={() => onViewChange("api-integrations")}
            collapsed={!isOpen}
          />
          <SidebarItem 
            icon={<Video className="h-5 w-5" />}
            text="Video & Ses Analizi"
            isActive={activeView === "video-audio-analyzer"}
            onClick={() => onViewChange("video-audio-analyzer")}
            collapsed={!isOpen}
          />
        </nav>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-2 border-t">
          <SidebarItem 
            icon={<Settings className="h-5 w-5" />}
            text="Ayarlar"
            isActive={false}
            onClick={() => {}}
            collapsed={!isOpen}
          />
          <SidebarItem 
            icon={<LogOut className="h-5 w-5" />}
            text="Çıkış"
            isActive={false}
            onClick={onLogout}
            collapsed={!isOpen}
          />
        </div>
      </aside>
      
      {/* Mobile toggle button */}
      <button 
        className="fixed bottom-4 right-4 z-30 md:hidden p-3 bg-primary text-white rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  text: string
  isActive: boolean
  onClick: () => void
  collapsed: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isActive, onClick, collapsed }) => {
  return (
    <button
      className={`flex items-center space-x-2 w-full p-2 rounded-md transition-colors ${
        isActive 
          ? 'bg-primary/10 text-primary' 
          : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && <span>{text}</span>}
    </button>
  )
}

export default Sidebar 