"use client"

import React, { useEffect } from 'react'
import { X, Clock, User } from 'lucide-react'

interface NewsArticle {
  id: string
  title: string
  summary: string
  source: {
    name: string
  }
  category: string
  publishDate: string
  readTime: string
  content: string
}

interface CategoryNewsModalProps {
  isOpen: boolean
  onClose: () => void
  category: string | null
  news: NewsArticle[]
  onArticleClick: (article: NewsArticle) => void
}

const CategoryNewsModal: React.FC<CategoryNewsModalProps> = ({
  isOpen,
  onClose,
  category,
  news,
  onArticleClick,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen || !category) return null

  // Find the category name and icon from the mock data
  const getCategoryDisplay = () => {
    const categoryMap: Record<string, { name: string, icon: string }> = {
      'politics': { name: 'Politika', icon: '🏛️' },
      'technology': { name: 'Teknoloji', icon: '💻' },
      'business': { name: 'İş Dünyası', icon: '📈' },
      'entertainment': { name: 'Eğlence', icon: '🎬' },
      'sports': { name: 'Spor', icon: '⚽' },
      'science': { name: 'Bilim', icon: '🔬' },
      'health': { name: 'Sağlık', icon: '🏥' },
      'education': { name: 'Eğitim', icon: '🎓' },
    }
    
    return categoryMap[category] || { name: category, icon: '📄' }
  }

  const categoryDisplay = getCategoryDisplay()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <span className="text-2xl mr-2">{categoryDisplay.icon}</span>
            <h2 className="text-lg font-semibold">{categoryDisplay.name} Haberleri</h2>
          </div>
          <button 
            className="p-1 rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="space-y-4">
            {news.length > 0 ? (
              news.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer"
                  onClick={() => {
                    onArticleClick(article)
                    onClose()
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.publishDate}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        {article.source.name}
                      </div>
                    </div>
                    
                    <h3 className="font-medium">{article.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.summary}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-xs text-gray-500">
                        {article.readTime} okuma süresi
                      </div>
                      <button 
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md hover:bg-primary/20 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          onArticleClick(article)
                          onClose()
                        }}
                      >
                        Detaylar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <p className="text-gray-500">Bu kategoride haber bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryNewsModal 