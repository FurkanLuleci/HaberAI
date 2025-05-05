"use client"

import React, { useEffect } from 'react'
import { X, ExternalLink, Clock, User } from 'lucide-react'

interface Person {
  id: string
  name: string
  bio: string
  category: string
  source: string
  sourceType: string
  lastUpdate: string
}

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

interface PersonDetailModalProps {
  isOpen: boolean
  onClose: () => void
  person: Person | null
  news: NewsArticle[]
  onArticleClick: (article: NewsArticle) => void
}

const PersonDetailModal: React.FC<PersonDetailModalProps> = ({
  isOpen,
  onClose,
  person,
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

  if (!isOpen || !person) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold">{person.name}</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100">
                {person.category}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                Son güncelleme: {person.lastUpdate}
              </div>
            </div>
          </div>
          <button 
            className="p-1 rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Person Info */}
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h3 className="font-medium mb-2">Hakkında</h3>
              <p className="text-sm text-gray-700">{person.bio}</p>
            </div>
            <div className="md:w-1/3">
              <h3 className="font-medium mb-2">Kaynak Bilgileri</h3>
              <div className="text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-500">Kaynak Tipi:</span>
                  <span>{person.sourceType}</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-500">Takip Tarihi:</span>
                  <span>12 Nis 2025</span>
                </div>
                <a 
                  href={person.source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center mt-2 text-primary hover:underline"
                >
                  <span>Kaynağa Git</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related News */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-300px)]">
          <h3 className="font-medium mb-3">İlgili Haberler</h3>
          
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
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100">
                        {article.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.publishDate}
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
                <p className="text-gray-500">Bu kişi için haber bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t p-4 flex justify-end">
          <button 
            className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary/90"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  )
}

export default PersonDetailModal 