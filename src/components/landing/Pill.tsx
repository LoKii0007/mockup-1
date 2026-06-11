import { motion } from 'motion/react'
import React, { useRef, useState } from 'react'

const getPillPos = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = e.clientX - rect.left
    const cy = e.clientY - rect.top

    const left = ((cx / rect.width) * 100)
    const top = ((cy / rect.height) * 100)

    const x = Math.max(cx, rect.width - cx)
    const y = Math.max(cy, rect.height - cy)
    const radius = Math.sqrt(x * x + y * y)

    return { top, left, radius }
}

export const Pill = ({ children = null, className }: { children?: React.ReactNode | null, className?: string }) => {
    const posRef = useRef<{ top: number, left: number, radius: number }>({ top: 0, left: 0, radius: 0 })
    const [hasEntered, setHasEntered] = useState(false)
    const circleRef = useRef<HTMLDivElement>(null)

    const handleMouseEnter = (e: any) => {

        const { top, left, radius } = getPillPos(e)
        posRef.current = { top, left, radius }
        requestAnimationFrame(() => {
            setHasEntered(true)
        })
    }

    const handleMouseLeave = (e: any) => {
        const { top, left, radius } = getPillPos(e)
        posRef.current = { top, left, radius }
        requestAnimationFrame(() => {
            setHasEntered(false)
        })
    }


    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`relative overflow-hidden group ${className}`}>
            {children}


            <motion.div
                ref={circleRef}
                style={{
                    top: `${posRef.current.top}%`,
                    left: `${posRef.current.left}%`,
                    width: `${posRef.current.radius * 2}px`,
                    height: `${posRef.current.radius * 2}px`,
                    scale: hasEntered ? 1 : 0
                }}
                className="absolute z-10 rounded-full bg-white transition-all duration-150 ease-in group-hover:ease-in-out group-hover:duration-300 -translate-x-1/2 -translate-y-1/2 "></motion.div>
        </div>
    )
}
