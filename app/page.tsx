"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { SensorGraph } from "@/components/dashboard/sensor-graph"
import { StatusCard } from "@/components/dashboard/status-card"
import { mockHelmetData } from "@/lib/firebase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, History, Settings } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const [status, setStatus] = useState(mockHelmetData)

  // Simulate accident toggle for demo
  const toggleAccident = () => {
    setStatus(prev => ({
      ...prev,
      status: prev.status === 'Normal' ? 'Accident' : 'Normal',
      lastUpdate: Date.now()
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader status={status} />
      
      <main className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={toggleAccident} className={status.status === 'Normal' ? "text-red-500 hover:text-red-600" : "text-green-500 hover:text-green-600"}>
              {status.status === 'Normal' ? 'Simulate Accident' : 'Reset Status'}
            </Button>
            <Button>Export Report</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatusCard status={status} />
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
              <Navigation className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234 km</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Safety Score</CardTitle>
              <ShieldAlert className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98/100</div>
              <p className="text-xs text-muted-foreground">Excellent riding behavior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Time</CardTitle>
              <History className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42h 15m</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">
            <SensorGraph />
          </div>
          <div className="col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Live Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-md h-[250px] flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for Map - In real app use Google Maps or Leaflet */}
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 grid grid-cols-6 grid-rows-6 gap-px opacity-20">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="bg-slate-300 dark:bg-slate-600" />
                    ))}
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <MapPin className="h-8 w-8 text-red-500 animate-bounce" />
                    <div className="bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                      {status.location.lat.toFixed(4)}, {status.location.lng.toFixed(4)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Address</span>
                    <span className="font-medium">123 Safety Blvd, Tech City</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Speed</span>
                    <span className="font-medium">0 km/h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
