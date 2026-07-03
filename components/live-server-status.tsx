'use client'

import { useEffect, useState } from 'react'

interface ServerStatus {
  online: boolean
  players: number
  maxPlayers: number
  motd: string
  error?: string
}

export function LiveServerStatus() {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: 0,
    maxPlayers: 0,
    motd: 'Loading...',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(
          'https://api.mcsrvstat.us/3/play.pgcmc.fun',
          { cache: 'no-store' }
        )
        const data = await response.json()
        
        if (data.online) {
          setStatus({
            online: true,
            players: data.players?.online || 0,
            maxPlayers: data.players?.max || 100,
            motd: data.motd?.clean?.[0] || 'PGC Minecraft Server',
          })
        } else {
          setStatus({
            online: false,
            players: 0,
            maxPlayers: 0,
            motd: 'Server Offline',
          })
        }
      } catch (error) {
        setStatus({
          online: false,
          players: 0,
          maxPlayers: 0,
          motd: 'Unable to fetch status',
          error: String(error),
        })
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-lg border border-border bg-background/50 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className={`h-3 w-3 rounded-full ${status.online ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
        <span className="text-sm font-semibold">
          {status.online ? 'SERVER ONLINE' : 'SERVER OFFLINE'}
        </span>
      </div>
      
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">{status.motd}</p>
        
        {status.online ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono">
              <span className="text-green-400 font-bold">{status.players}</span>
              <span className="text-muted-foreground"> / {status.maxPlayers} players online</span>
            </span>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground italic">Join next tournament!</p>
        )}
      </div>
    </div>
  )
}
