"use client"

import { useState, useRef, useEffect } from "react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import images from "../lib/images"

interface LauncherCenterCardProps {
  className?: string
}

const LauncherCenterCard = ({ className = "" }: LauncherCenterCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Use only the first 7 V-shape images
  const vShapeImages = images.slice(0, 7)

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg border-2 border-white/20 bg-black group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Grid of V-Shape Cards */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          {/* Simple V-Shape Layout - 7 cards arranged in V formation */}
          <div className="relative w-full h-full flex items-center justify-center">
            {vShapeImages.map((img, i) => {
              // Calculate V-shape positions
              const totalCards = vShapeImages.length
              const centerIndex = Math.floor(totalCards / 2)
              const distanceFromCenter = i - centerIndex
              
              // V-shape angle: cards fan out from center
              const angle = distanceFromCenter * 8 // degrees
              const yOffset = Math.abs(distanceFromCenter) * 15 // pixels
              const scale = 1 - Math.abs(distanceFromCenter) * 0.05
              const zIndex = totalCards - Math.abs(distanceFromCenter)

              return (
                <div
                  key={`v-card-${i}`}
                  className="absolute transition-all duration-500"
                  style={{
                    width: "30%",
                    height: "60%",
                    left: "35%",
                    top: "20%",
                    transform: `
                      translateX(${distanceFromCenter * 25}%)
                      translateY(${yOffset}px)
                      rotate(${angle}deg)
                      scale(${isHovered ? scale * 1.05 : scale})
                    `,
                    zIndex,
                    opacity: 0.9,
                  }}
                >
                  <div className="w-full h-full rounded-md overflow-hidden border border-white/10 shadow-2xl">
                    <ImageWithFallback
                      src={img}
                      alt={`Scene ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[1px] group-hover:bg-black/10 transition-colors duration-300">
        <div className="text-center z-50 space-y-3">
          <h2 className="text-2xl md:text-4xl font-black text-white drop-shadow-2xl" style={{ fontFamily: 'Cairo, sans-serif' }}>
            النسخة
          </h2>
          
          {/* Slogan: "بس اصلي" - Just Be Original */}
          <p className="text-base md:text-xl font-bold text-[#FFD700] tracking-wider drop-shadow-lg" style={{ fontFamily: 'Cairo, sans-serif' }}>
            بس اصلي
          </p>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-2.5 bg-black/80 hover:bg-black/90 border-2 border-[#FFD700] rounded-full text-white text-sm font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]" style={{ fontFamily: 'Cairo, sans-serif' }}>
            ابدأ المحرر
          </button>

          <p className="text-xs md:text-sm text-white/70 tracking-wider mt-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
            أدوات صناعة المحتوى السينمائي
          </p>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFD700]/50 transition-colors duration-300 rounded-lg pointer-events-none" />
    </div>
  )
}

export default LauncherCenterCard