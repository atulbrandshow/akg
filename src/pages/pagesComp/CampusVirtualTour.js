'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Maximize } from 'lucide-react'

export default function CampusVirtualTour() {
  const viewerRef = useRef(null)
  const [viewer, setViewer] = useState(null)
  const [currentPanoramaIndex, setCurrentPanoramaIndex] = useState(0)
  const [fov, setFov] = useState(100)

  const virtualTour = [
    '/image/virtual-tour/img.jpg',
    '/image/virtual-tour/img-1.jpg',
    '/image/virtual-tour/img-2.jpg',
    '/image/virtual-tour/img-3.jpg',
    '/image/virtual-tour/img-4.jpg',
    '/image/virtual-tour/img-5.jpg',
    '/image/virtual-tour/img-6.jpg',
    '/image/virtual-tour/img-7.jpg',
    '/image/virtual-tour/img-8.jpg',
    '/image/virtual-tour/img-9.jpg',
    '/image/virtual-tour/img-10.jpg',
    '/image/virtual-tour/img-11.jpg',
    '/image/virtual-tour/img-12.jpg',
    '/image/virtual-tour/img-13.jpg',
    '/image/virtual-tour/img-14.jpg',
    '/image/virtual-tour/img-15.jpg',
    '/image/virtual-tour/img-16.jpg',
  ]

  useEffect(() => {
    if (typeof window !== 'undefined' && viewerRef.current) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
      script.async = true
      document.body.appendChild(script)

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css'
      document.head.appendChild(link)

      script.onload = () => {
        const pannellum = window.pannellum
        if (pannellum && viewerRef.current) {
          const v = pannellum.viewer(viewerRef.current, {
            type: 'equirectangular',
            panorama: virtualTour[currentPanoramaIndex],
            autoLoad: true,
            hfov: fov,
          })
          setViewer(v)
        }
      }

      return () => {
        document.body.removeChild(script)
        document.head.removeChild(link)
      }
    }
  }, [currentPanoramaIndex, fov])

  const handleZoomIn = () => {
    const newFov = Math.max(30, fov - 10);
    setFov(newFov);
    viewer?.setHfov(newFov);
  }

  const handleZoomOut = () => {
    const newFov = Math.min(120, fov + 10);
    setFov(newFov);
    viewer?.setHfov(newFov);
  }

  const handleReset = () => {
    if (viewer) {
      const initialFov = 100;
      setFov(initialFov);
      viewer.setHfov(initialFov);
      viewer.setYaw(0);
      viewer.setPitch(0);
    }
  }

  const handleFullscreen = () => viewer?.toggleFullscreen()

  const handleNextPanorama = () => {
    setCurrentPanoramaIndex((currentPanoramaIndex + 1) % virtualTour.length)
  }

  const handlePreviousPanorama = () => {
    setCurrentPanoramaIndex((currentPanoramaIndex - 1 + virtualTour.length) % virtualTour.length)
  }

  return (
    <div className="w-full mx-auto py-4">
      <div ref={viewerRef} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg"></div>
      <div className="mt-4 flex justify-center space-x-2">
        <button onClick={handlePreviousPanorama} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={handleNextPanorama} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronRight className="h-6 w-6" />
        </button>
        <button onClick={handleZoomIn} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ZoomIn className="h-6 w-6" />
        </button>
        <button onClick={handleZoomOut} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ZoomOut className="h-6 w-6" />
        </button>
        <button onClick={handleReset} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <RotateCcw className="h-6 w-6" />
        </button>
        <button onClick={handleFullscreen} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <Maximize className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
