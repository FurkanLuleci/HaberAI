"use client"

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Home, Users, BarChart2, Settings, LogOut, FileText, Link2, Video } from "lucide-react"

interface SidebarProps {
  onViewChange: (view: string) => void
  activeView: string
}

export function Sidebar({ onViewChange, activeView }: SidebarProps) {
  return (
    <SidebarComponent>
      <SidebarHeader className="flex items-center justify-center py-4">
        <div className="flex items-center space-x-2">
          <div className="bg-primary rounded-md p-1">
            <BarChart2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">HaberAI</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu className="px-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onViewChange("dashboard")}
              isActive={activeView === "dashboard"}
              className="pl-4"
            >
              <Home className="h-5 w-5" />
              <span>Ana Sayfa</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onViewChange("watchlist")}
              isActive={activeView === "watchlist"}
              className="pl-4"
            >
              <Users className="h-5 w-5" />
              <span>Takip Listesi</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onViewChange("create-news")}
              isActive={activeView === "create-news"}
              className="pl-4"
            >
              <FileText className="h-5 w-5" />
              <span>Haber Oluştur</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onViewChange("api-integrations")}
              isActive={activeView === "api-integrations"}
              className="pl-4"
            >
              <Link2 className="h-5 w-5" />
              <span>API Entegrasyonları</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onViewChange("video-audio-analyzer")}
              isActive={activeView === "video-audio-analyzer"}
              className="pl-4"
            >
              <Video className="h-5 w-5" />
              <span>Video & Ses Analizi</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="px-2">
          <SidebarMenuItem>
            <SidebarMenuButton className="pl-4">
              <Settings className="h-5 w-5" />
              <span>Ayarlar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="pl-4">
              <LogOut className="h-5 w-5" />
              <span>Çıkış</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarComponent>
  )
}
