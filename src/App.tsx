import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { SmoothScroll } from './components/effects/SmoothScroll'
import { FilmGrain } from './components/effects/FilmGrain'
import { CustomCursor } from './components/layout/CustomCursor'
import { MouseGlow } from './components/layout/MouseGlow'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { FloatingShapes } from './components/layout/FloatingShapes'
import { PageTransition } from './components/layout/PageTransition'
import { HomePage } from './pages/HomePage'
import { DistrictDetailPage } from './pages/DistrictDetailPage'

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/district/:id"
          element={
            <PageTransition>
              <DistrictDetailPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <SmoothScroll>
        <BrowserRouter>
          <div className="relative min-h-screen bg-[#050b14] text-slate-200">
            <FilmGrain />
            <FloatingShapes />
            <MouseGlow />
            <CustomCursor />
            <ScrollProgress />
            <Header />
            <main className="relative z-10">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </SmoothScroll>
    </ThemeProvider>
  )
}

export default App
