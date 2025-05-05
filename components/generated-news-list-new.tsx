"use client"

import React from 'react'
import { Clock, User } from 'lucide-react'

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

interface GeneratedNewsListProps {
  news: NewsArticle[]
  onArticleClick: (article: NewsArticle) => void
}

const GeneratedNewsList: React.FC<GeneratedNewsListProps> = ({ news, onArticleClick }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Oluşturulan Haberler</h2>
        <button className="text-sm text-primary hover:underline">
          Tümünü Gör
        </button>
      </div>

      <div className="space-y-4">
        {news.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer"
            onClick={() => onArticleClick(article)}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
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
                
                <h3 className="font-medium text-lg line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{article.summary}</p>
              </div>
              
              <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                <div className="text-xs text-gray-500">
                  {article.readTime} okuma süresi
                </div>
                <button 
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md hover:bg-primary/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    onArticleClick(article)
                  }}
                >
                  Okumaya Devam Et
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GeneratedNewsList 