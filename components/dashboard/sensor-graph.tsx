"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SensorData } from "@/lib/types"

export function SensorGraph() {
  const [data, setData] = useState<SensorData[]>([])

  // Simulate real-time sensor data
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const now = Date.now()
        const newPoint = {
          timestamp: now,
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1,
          z: Math.random() * 2 - 1 + 9.8, // Gravity
        }
        const newData = [...prev, newPoint]
        if (newData.length > 50) newData.shift()
        return newData
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Accelerometer Data (G-Force)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="timestamp" 
                domain={['auto', 'auto']}
                tickFormatter={(ts) => new Date(ts).toLocaleTimeString()}
                hide
              />
              <YAxis domain={[-2, 12]} />
              <Tooltip 
                labelFormatter={(ts) => new Date(ts).toLocaleTimeString()}
              />
              <Line type="monotone" dataKey="x" stroke="#ef4444" dot={false} strokeWidth={2} name="X-Axis" />
              <Line type="monotone" dataKey="y" stroke="#3b82f6" dot={false} strokeWidth={2} name="Y-Axis" />
              <Line type="monotone" dataKey="z" stroke="#22c55e" dot={false} strokeWidth={2} name="Z-Axis" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
