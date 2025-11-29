import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LatestNews from './components/LatestNews'
import CEOMessage from './components/CEOMessage'
import EventsPreview from './components/EventsPreview'
import CTABand from './components/CTABand'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'
import CampusAmbassadorSection from './components/CampusAmbassadorSection'
import Mission from './components/Mission'
import Vision from './components/Vision'

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar onRegisterClick={() => setIsRegistrationOpen(true)} />
      <main>
        <Hero onRegisterClick={() => setIsRegistrationOpen(true)} />
        <LatestNews />
        <CEOMessage />
        <CampusAmbassadorSection />
        <Mission />
        <Vision />
        <EventsPreview />
        <CTABand onRegisterClick={() => setIsRegistrationOpen(true)} />
      </main>
      <Footer />
      
      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  )
}

export default App