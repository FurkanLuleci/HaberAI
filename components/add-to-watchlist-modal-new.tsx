"use client"

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface Category {
  id: string
  name: string
  count: number
  icon: string
}

interface AddToWatchlistModalProps {
  isOpen: boolean
  onClose: () => void
  onAddPerson: (person: any) => void
  categories: Category[]
}

const AddToWatchlistModal: React.FC<AddToWatchlistModalProps> = ({
  isOpen,
  onClose,
  onAddPerson,
  categories,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    category: '',
    source: '',
    sourceType: 'Web Sitesi',
  })
  
  const [errors, setErrors] = useState({
    name: '',
    bio: '',
    category: '',
    source: '',
  })
  
  const sourceTypes = ['Web Sitesi', 'Twitter', 'RSS Beslemesi', 'API']
  
  useEffect(() => {
    // Reset form data when modal is opened/closed
    if (isOpen) {
      setFormData({
        name: '',
        bio: '',
        category: '',
        source: '',
        sourceType: 'Web Sitesi',
      })
      setErrors({
        name: '',
        bio: '',
        category: '',
        source: '',
      })
    }
    
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for the field being edited
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {
      name: '',
      bio: '',
      category: '',
      source: '',
    }
    let isValid = true
    
    if (!formData.name.trim()) {
      newErrors.name = 'İsim alanı zorunludur'
      isValid = false
    }
    
    if (!formData.bio.trim()) {
      newErrors.bio = 'Açıklama alanı zorunludur'
      isValid = false
    }
    
    if (!formData.category) {
      newErrors.category = 'Kategori seçimi zorunludur'
      isValid = false
    }
    
    if (!formData.source.trim()) {
      newErrors.source = 'Kaynak alanı zorunludur'
      isValid = false
    } else if (formData.sourceType === 'Web Sitesi' && !formData.source.startsWith('http')) {
      newErrors.source = 'Geçerli bir URL giriniz (http:// veya https:// ile başlamalı)'
      isValid = false
    }
    
    setErrors(newErrors)
    return isValid
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      onAddPerson(formData)
    }
  }
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Takip Listesine Ekle</h2>
          <button 
            className="p-1 rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 overflow-y-auto max-h-[calc(90vh-130px)]">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                İsim
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                placeholder="İsim veya Kaynak adı"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            {/* Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Açıklama
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                className={`w-full px-3 py-2 border rounded-md ${errors.bio ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                placeholder="Kişi veya kaynak hakkında kısa açıklama"
              />
              {errors.bio && <p className="mt-1 text-sm text-red-500">{errors.bio}</p>}
            </div>
            
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Kategori
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
              >
                <option value="">Kategori Seçin</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
            </div>
            
            {/* Source Type */}
            <div>
              <label htmlFor="sourceType" className="block text-sm font-medium text-gray-700 mb-1">
                Kaynak Tipi
              </label>
              <select
                id="sourceType"
                name="sourceType"
                value={formData.sourceType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {sourceTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Source */}
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
                Kaynak URL
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.source ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                placeholder="https://example.com"
              />
              {errors.source && <p className="mt-1 text-sm text-red-500">{errors.source}</p>}
            </div>
          </div>
        </form>
        
        {/* Footer */}
        <div className="border-t p-4 flex justify-end space-x-3">
          <button 
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
            onClick={onClose}
          >
            İptal
          </button>
          <button 
            type="button"
            className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary/90"
            onClick={handleSubmit}
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddToWatchlistModal 