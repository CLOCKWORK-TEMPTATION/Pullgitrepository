"use client"

import { useState, useEffect, useLayoutEffect, type RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { heroConfig, type ResponsiveConfig } from "../lib/hero-config"

gsap.registerPlugin(ScrollTrigger)

export const useHeroAnimation = (
  containerRef: RefObject<HTMLDivElement | null>,
  triggerRef: RefObject<HTMLDivElement | null>,
) => {
  const [responsiveValues, setResponsiveValues] = useState<ResponsiveConfig | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setResponsiveValues(heroConfig.getResponsiveValues(window.innerWidth))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useLayoutEffect(() => {
    if (!responsiveValues || !containerRef.current || !triggerRef.current) return

    const phase3Images = gsap.utils.toArray(".phase-3-img") as HTMLElement[]

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=5200",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          id: "hero-scroll",
          invalidateOnRefresh: true,
        },
      })

      // Phase 1: Reveal Video + Show Header
      tl.to(".video-mask-wrapper", {
        scale: 5,
        y: -600,
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
        pointerEvents: "none",
        willChange: "transform, opacity",
      })

      tl.to(
        ".fixed-header",
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=2.5",
      )

      // Phase 2: Title + Dedication
      tl.fromTo(
        ".text-content-wrapper",
        { opacity: 0, y: 300, scale: 0.9 },
        {
          opacity: 1,
          y: -240,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          zIndex: 10050,
        },
        "-=1.5",
      )

      tl.fromTo(
        ".dedication-wrapper",
        { opacity: 0, y: 300, scale: 0.95 },
        {
          opacity: 1,
          y: -240,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          zIndex: 10049,
        },
        "-=1.45",
      )

      tl.set(
        ".phase-5-wrapper",
        {
          y: -240,
          scale: 1,
          opacity: 0,
          zIndex: 10048,
        },
        "<",
      )

      tl.to(
        [".text-content-wrapper", ".dedication-wrapper"],
        {
          y: -240,
          duration: 1,
          ease: "none",
        },
        0.5,
      )

      // Phase 3: Card Animation Setup
      phase3Images.forEach((img) => {
        gsap.set(img, { willChange: "transform, opacity" })
      })

      phase3Images.forEach((img, i) => {
        const staggerDelay = i * 0.12

        tl.fromTo(
          img,
          { y: "120vh", rotation: 0, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            force3D: true,
          },
          2.5 + staggerDelay,
        )
      })

      tl.to(
        ".phase-3-img",
        {
          top: (i) => (i < responsiveValues.cardPositions.length ? (responsiveValues.cardPositions[i]?.top || "50%") : "100vh"),
          left: (i) => (i < responsiveValues.cardPositions.length ? (responsiveValues.cardPositions[i]?.left || "50%") : "50%"),
          rotation: (i) => (i < responsiveValues.cardPositions.length ? (responsiveValues.cardPositions[i]?.rotation || 0) : 0),
          scale: responsiveValues.scale,
          opacity: (i) => (i < responsiveValues.cardPositions.length ? 1 : 0),
          zIndex: (i) => {
            const pos = responsiveValues.cardPositions[i]
            if (!pos) return 0
            const l = Number.parseFloat(String(pos.left).replace("%", ""))
            const t = Number.parseFloat(String(pos.top).replace("%", ""))
            const dist = Math.abs(l - 50)
            return Math.round((100 - dist) * 10 + t)
          },
          duration: 3.3,
          ease: "power3.inOut",
        },
        3.5,
      )

      // Phase 5: Crossfade from dedication to slogan "بس اصلي"
      tl.to(
        ".dedication-wrapper",
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "+=0.4",
      )

      tl.to(
        ".phase-5-wrapper",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<+=0.05",
      )

      // Show CTA
      tl.to(
        ".hero-cta",
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          pointerEvents: "auto",
        },
        "+=0.3",
      )
    }, containerRef)

    return () => {
      phase3Images?.forEach((img) => {
        gsap.set(img, { willChange: "auto" })
      })
      gsap.set(".video-mask-wrapper", { willChange: "auto" })

      ctx.revert()
      ScrollTrigger.getById("hero-scroll")?.kill()
      ScrollTrigger.refresh()
    }
  }, [responsiveValues, containerRef, triggerRef])

  return { responsiveValues }
}
