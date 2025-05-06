"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Users, CreditCard, Settings, BarChart } from 'lucide-react'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    const role = localStorage.getItem('role')
    if (role !== 'admin') {
      router.push('/')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Yönetim Paneli</h1>
          <p className="mt-1 text-sm text-gray-500">
            Sistem yönetimi ve istatistikler
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Toplam Kullanıcı"
            value="256"
            icon={<Users className="h-6 w-6 text-blue-600" />}
            description="Aktif aboneler"
          />
          <StatCard
            title="Aylık Gelir"
            value="₺12,450"
            icon={<CreditCard className="h-6 w-6 text-green-600" />}
            description="Bu ay"
          />
          <StatCard
            title="İçerik Sayısı"
            value="1,543"
            icon={<BarChart className="h-6 w-6 text-purple-600" />}
            description="Üretilen içerikler"
          />
          <StatCard
            title="Aktif Plan"
            value="4"
            icon={<Settings className="h-6 w-6 text-orange-600" />}
            description="Abonelik planları"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Son Kayıt Olan Kullanıcılar</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-medium">Kullanıcı {i + 1}</p>
                      <p className="text-sm text-gray-500">user{i + 1}@example.com</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 saat önce</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Son Aktiviteler</h2>
            <div className="space-y-4">
              {[
                'Yeni abonelik planı eklendi',
                'Sistem güncellemesi yapıldı',
                'Yeni özellik: Twitter entegrasyonu',
                'Veritabanı yedeklemesi alındı',
                'Kullanıcı raporları güncellendi'
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm">{activity}</p>
                  <span className="text-xs text-gray-500">{i + 1}g önce</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description: string
}

function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-semibold">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  )
} 