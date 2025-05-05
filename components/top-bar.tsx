import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export function TopBar() {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-6 justify-between">
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Ara..." className="w-[200px] sm:w-[300px] pl-8" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end mr-1 hidden sm:flex">
            <span className="font-medium text-sm">Furkan Lüleci</span>
            <span className="text-xs text-muted-foreground">Pro Plan - 128/2000</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/images/profile.jpg" alt="Furkan Lüleci" />
                  <AvatarFallback>FL</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
              <div className="px-2 py-1.5 text-xs text-muted-foreground sm:hidden">Pro Plan - 128/2000</div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profil</DropdownMenuItem>
              <DropdownMenuItem>Ayarlar</DropdownMenuItem>
              <DropdownMenuItem>Abonelik</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Çıkış Yap</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
