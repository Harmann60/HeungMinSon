import React from 'react'
import { PreLoader } from './components/common/PreLoader'
import { Header } from './components/common/Header'
import { Menu } from './components/common/Menu'
import { Footer } from './components/common/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { OnPitchSection } from './components/sections/OnPitchSection'
import { ArchiveSection } from './components/sections/ArchiveSection'
import { OffPitchSection } from './components/sections/OffPitchSection'
import { GallerySection } from './components/sections/GallerySection'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-default selection:text-black">
      <PreLoader />
      <Header />
      <Menu />
      <main>
        <HeroSection />
        <OnPitchSection />
        <ArchiveSection />
        <OffPitchSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
