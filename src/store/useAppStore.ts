import { create } from 'zustand'

export type PageSection = 'home' | 'on-pitch' | 'archive' | 'off-pitch' | 'gallery'

interface MenuState {
  open: boolean
  activeSection: PageSection
  setOpen: (open: boolean) => void
  setActiveSection: (section: PageSection) => void
}

interface FanMessage {
  id: string
  name: string
  country: string
  message: string
  era: string
  timestamp: string
}

interface FanWallState {
  messages: FanMessage[]
  addMessage: (msg: Omit<FanMessage, 'id' | 'timestamp'>) => void
}

export const useMenuStore = create<MenuState>((set) => ({
  open: false,
  activeSection: 'home',
  setOpen: (open) => set({ open }),
  setActiveSection: (activeSection) => set({ activeSection }),
}))

export const useFanWallStore = create<FanWallState>((set) => ({
  messages: [
    {
      id: '1',
      name: 'Min-Jae',
      country: 'Seoul, KR',
      era: 'Korea Captain',
      message: 'Watching you sprint 73 meters against Burnley made the whole country jump out of their seats. Effort never betrays you!',
      timestamp: '2026-11-20',
    },
    {
      id: '2',
      name: 'Oliver',
      country: 'North London, UK',
      era: 'Spurs #7',
      message: '10 years, 173 goals, the Golden Boot, and lifting the Europa League trophy in Bilbao as our captain. Forever a Spurs legend.',
      timestamp: '2026-11-22',
    },
    {
      id: '3',
      name: 'Mateo',
      country: 'Los Angeles, US',
      era: 'LAFC #7',
      message: 'The camera celebration under the lights in LA hits different. Welcome to Black & Gold, Sonny!',
      timestamp: '2026-11-25',
    },
  ],
  addMessage: (msg) =>
    set((state) => ({
      messages: [
        {
          ...msg,
          id: String(Date.now()),
          timestamp: new Date().toISOString().slice(0, 10),
        },
        ...state.messages,
      ],
    })),
}))
