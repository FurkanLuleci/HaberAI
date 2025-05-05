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

interface NewsArticleModalProps {
  isOpen: boolean
  onClose: () => void
  article: NewsArticle | null
}

const NewsArticleModal: React.FC<NewsArticleModalProps> = ({ isOpen, onClose, article }) => {
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

  if (!isOpen || !article) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <div className="flex items-center space-x-3 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100">
                {article.category}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {article.publishDate}
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <User className="h-3 w-3 mr-1" />
                {article.source.name}
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
        
        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-130px)]">
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 font-medium text-base mb-4">
              {article.summary}
            </p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t p-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {article.readTime} okuma süresi
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Paylaş
            </button>
            <button className="px-3 py-1 bg-primary text-white rounded-md text-sm hover:bg-primary/90">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsArticleModal 