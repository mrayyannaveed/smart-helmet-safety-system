import { Bell, Battery, Wifi, Bluetooth, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { HelmetStatus } from "@/lib/types"

interface DashboardHeaderProps {
  status: HelmetStatus
}

export function DashboardHeader({ status }: DashboardHeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            SH
          </div>
          <span>Smart Helmet Monitor</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
            <div className="flex items-center gap-1">
              <Battery className={`h-4 w-4 ${status.batteryLevel < 20 ? 'text-red-500' : 'text-green-500'}`} />
              <span>{status.batteryLevel}%</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              <Wifi className={`h-4 w-4 ${status.isWifiConnected ? 'text-blue-500' : 'text-gray-400'}`} />
              <span>{status.isWifiConnected ? 'Online' : 'Offline'}</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              <Bluetooth className={`h-4 w-4 ${status.isBleConnected ? 'text-blue-500' : 'text-gray-400'}`} />
              <span>{status.isBleConnected ? 'Connected' : 'Disconnected'}</span>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
