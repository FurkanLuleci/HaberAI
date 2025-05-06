"use client"

import React from 'react'
import { Card } from '@/components/ui/card'

interface PricingPlan {
  title: string
  description: string
  trackingCount: number
  price: number
  type: 'Özel Takip'
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Bilet Paketi',
    description: 'Ses Çözücü ve İçerik Üretici için Geçerli Bilet Paketidir. (200 Bilet)',
    trackingCount: 0,
    price: 144,
    type: 'Özel Takip'
  },
  {
    title: 'HaberAl Destekli Haber Sitesi',
    description: 'Yapay Zeka Destekli Haber Sitesidir.',
    trackingCount: 0,
    price: 14400,
    type: 'Özel Takip'
  },
  {
    title: 'Mini Paket',
    description: 'Takip Etmek İstediğiniz Kişi ve Kurumları Listenize Eklemenize Olanak Sağlar. Aboneliğiniz Aktif İse Kullanabilirsiniz.',
    trackingCount: 10,
    price: 250,
    type: 'Özel Takip'
  },
  {
    title: 'Takip Paketi (Std)',
    description: 'Takip Etmek İstediğiniz Kişi ve Kurumları Listenize Eklemenize Olanak Sağlar. Aboneliğiniz Aktif İse Kullanabilirsiniz.',
    trackingCount: 25,
    price: 560,
    type: 'Özel Takip'
  },
  {
    title: 'Takip Paketi (Pro)',
    description: 'Takip Etmek İstediğiniz Kişi ve Kurumları Listenize Eklemenize Olanak Sağlar. Aboneliğiniz Aktif İse Kullanabilirsiniz.',
    trackingCount: 60,
    price: 1254,
    type: 'Özel Takip'
  },
  {
    title: 'Takip Paketi (Pro Go)',
    description: 'Takip Etmek İstediğiniz Kişi ve Kurumları Listenize Eklemenize Olanak Sağlar. Aboneliğiniz Aktif İse Kullanabilirsiniz.',
    trackingCount: 140,
    price: 2804,
    type: 'Özel Takip'
  },
  {
    title: 'Takip Paketi (Business)',
    description: 'Takip Etmek İstediğiniz Kişi ve Kurumları Listenize Eklemenize Olanak Sağlar. Aboneliğiniz Aktif İse Kullanabilirsiniz.',
    trackingCount: 500,
    price: 9438,
    type: 'Özel Takip'
  },
  {
    title: 'Takip Paketi (Business Go)',
    description: 'Takip Etmek İstediğiniz Kişi ve Kurumları Listenize Eklemenize Olanak Sağlar. Aboneliğiniz Aktif İse Kullanabilirsiniz.',
    trackingCount: 1000,
    price: 17688,
    type: 'Özel Takip'
  }
]

export function PricingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {pricingPlans.map((plan, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
            <p className="text-sm text-gray-600">{plan.description}</p>
            
            <div className="pt-4 border-t">
              <div className="text-red-500 font-medium">{plan.type}</div>
              <div className="text-lg font-bold">{plan.trackingCount} Adet</div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="text-2xl font-bold text-gray-900">
                {plan.price.toLocaleString('tr-TR')} TL. <span className="text-sm font-normal">+ KDV</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 