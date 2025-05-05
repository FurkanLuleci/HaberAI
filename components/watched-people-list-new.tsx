"use client"

import React from 'react'
import { Plus, ExternalLink } from 'lucide-react'

interface Person {
  id: string
  name: string
  bio: string
  category: string
  source: string
  sourceType: string
  lastUpdate: string
}

interface WatchedPeopleListProps {
  people: Person[]
  onPersonClick: (person: Person) => void
  onAddNewClick: () => void
}

const WatchedPeopleList: React.FC<WatchedPeopleListProps> = ({
  people,
  onPersonClick,
  onAddNewClick,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Takip Listesi</h2>
        <button
          className="flex items-center gap-1 text-sm text-primary hover:underline"
          onClick={onAddNewClick}
        >
          <Plus className="h-4 w-4" />
          <span>Yeni Ekle</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer"
            onClick={() => onPersonClick(person)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{person.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{person.bio}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100">
                {person.category}
              </span>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>{person.sourceType}</span>
                <ExternalLink className="h-3 w-3" />
              </div>
              <div className="text-xs text-gray-400">
                Son güncelleme: {person.lastUpdate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WatchedPeopleList 