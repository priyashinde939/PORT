'use client'
import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import s from './MaskCursor.module.scss'

function MaskCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove) 
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
    text: {
      height: '50px',
      width: '50px',
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
  }

  const textEnter = () => {
    setCursorVariant('text')
  }

  const textLeave = () => {
    setCursorVariant('default')
  }

  return (
    <div className="flex">
      {/* ------------cursor----------- */}
      <motion.div
        variants={variants}
        animate={cursorVariant} // Use animate here instead of variants
        className={`${s.cursor}`}
      />
    </div>
  )
}

export default MaskCursor
