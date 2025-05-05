"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { mockCategories, mockWatchedPeople, mockGeneratedNews } from "@/lib/mock-data"
import { CreateNews } from "@/components/create-news"
import { ApiIntegrations } from "@/components/api-integrations"
import { VideoAudioAnalyzer } from "@/components/video-audio-analyzer"
import withAuth from "@/hoc/withAuth"

// Components
import Sidebar from "@/components/sidebar-new"
import TopBar from "@/components/top-bar-new"
import CategorySelection from "@/components/category-selection-new"
import WatchedPeopleList from "@/components/watched-people-list-new"
import GeneratedNewsList from "@/components/generated-news-list-new"
import NewsArticleModal from "@/components/news-article-modal-new"
import CategoryNewsModal from "@/components/category-news-modal-new"
import PersonDetailModal from "@/components/person-detail-modal-new"
import AddToWatchlistModal from "@/components/add-to-watchlist-modal-new"

// Base wrapper component that will be consistent between server and client
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen bg-gray-50">
    {children}
  </div>
)

function Dashboard() {
  const router = useRouter()
  const [activeView, setActiveView] = useState<string>("dashboard")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null)
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false)
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false)
  const [isAddWatchlistModalOpen, setIsAddWatchlistModalOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null)
  const [watchedPeople, setWatchedPeople] = useState(mockWatchedPeople)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [uniqueId, setUniqueId] = useState<string>('')

  // Move random ID generation to useEffect
  useEffect(() => {
    setUniqueId(Math.random().toString(36).substring(7))
  }, [])

  const handleViewChange = (view: string) => {
    setActiveView(view)
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setIsCategoryModalOpen(true)
  }

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article)
    setIsArticleModalOpen(true)
  }

  const handlePersonClick = (person: any) => {
    setSelectedPerson(person)
    setIsPersonModalOpen(true)
  }

  const handleAddPerson = (newPerson: any) => {
    const updatedPeople = [
      ...watchedPeople,
      {
        ...newPerson,
        id: uniqueId,
        lastUpdate: new Date().toISOString(),
      },
    ]
    setWatchedPeople(updatedPeople)
    setIsAddWatchlistModalOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('auth')
    router.push('/login')
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <CategorySelection categories={mockCategories} onCategorySelect={handleCategorySelect} />
            <GeneratedNewsList news={mockGeneratedNews} onArticleClick={handleArticleClick} />
          </div>
        )
      case "watchlist":
        return (
          <WatchedPeopleList
            people={watchedPeople}
            onPersonClick={handlePersonClick}
            onAddNewClick={() => setIsAddWatchlistModalOpen(true)}
          />
        )
      case "create-news":
        return <CreateNews />
      case "api-integrations":
        return <ApiIntegrations />
      case "video-audio-analyzer":
        return <VideoAudioAnalyzer />
      default:
        return <div>Dashboard</div>
    }
  }

  return (
    <DashboardWrapper>
      <Sidebar 
        onViewChange={handleViewChange} 
        activeView={activeView} 
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onLogout={handleLogout}
      />
      
      <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        <TopBar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 overflow-auto">{renderActiveView()}</main>
      </div>

      <NewsArticleModal
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
        article={selectedArticle}
      />
      <CategoryNewsModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        category={selectedCategory}
        news={mockGeneratedNews.filter((news) =>
          selectedCategory ? news.category.toLowerCase() === selectedCategory.toLowerCase() : true,
        )}
        onArticleClick={handleArticleClick}
      />
      <PersonDetailModal
        isOpen={isPersonModalOpen}
        onClose={() => setIsPersonModalOpen(false)}
        person={selectedPerson}
        news={mockGeneratedNews.filter((news) => (selectedPerson ? news.source.name === selectedPerson.name : false))}
        onArticleClick={handleArticleClick}
      />
      <AddToWatchlistModal
        isOpen={isAddWatchlistModalOpen}
        onClose={() => setIsAddWatchlistModalOpen(false)}
        onAddPerson={handleAddPerson}
        categories={mockCategories}
      />
    </DashboardWrapper>
  )
}

export default withAuth(Dashboard)
