import { AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelmetStatus } from "@/lib/types"

export function StatusCard({ status }: { status: HelmetStatus }) {
  const isAccident = status.status === 'Accident'
  
  return (
    <Card className={`${isAccident ? 'bg-red-50 border-red-200 dark:bg-red-950/20' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          System Status
        </CardTitle>
        {isAccident ? (
          <ShieldAlert className="h-4 w-4 text-red-500" />
        ) : (
          <CheckCircle className="h-4 w-4 text-green-500" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold flex items-center gap-2">
          {status.status}
          {isAccident && (
            <span className="animate-pulse flex h-3 w-3 rounded-full bg-red-500" />
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Last update: {new Date(status.lastUpdate).toLocaleTimeString()}
        </p>
        
        {isAccident && (
          <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-semibold">
              <AlertTriangle className="h-5 w-5" />
              CRITICAL ALERT
            </div>
            <p className="text-sm text-red-600 dark:text-red-300 mt-1">
              High impact detected. Emergency contacts notified.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
