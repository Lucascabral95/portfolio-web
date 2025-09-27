import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"

import { IoCloseSharp } from "react-icons/io5"
import "./ImageZoom.scss"

const ImageZoom = ({ images, currentIndex, setCurrentImage, setIsOpenImage }) => {
  const imageRef = useRef(null)
  const closeBtnRef = useRef(null)
  const [index, setIndex] = useState(currentIndex)

  const goToPrevious = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const handleClose = useCallback(() => {
    setIsOpenImage(false)
  }, [setIsOpenImage])

  const handleBackgroundClick = useCallback((e) => {
    const target = e.target

    const clickedOnIcon = target.closest('.iconooo')
    const clickedOnImage = target.closest('.imagen-del-zoom')

    if (!clickedOnIcon && !clickedOnImage) {
      handleClose()
    }
  }, [handleClose])

  useEffect(() => {
    if (images[index]) {
      setCurrentImage(images[index])
    }
  }, [index, images, setCurrentImage])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow || 'unset'
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          handleClose()
          break
        case 'ArrowLeft':
          e.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          e.preventDefault()
          goToNext()
          break
        default:
          return
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClose, goToPrevious, goToNext])

  useEffect(() => {
    if (images.length <= 1) return

    let startX = 0
    let startY = 0

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = Math.abs(startY - endY)

      if (diffY < 100) {
        if (diffX > 50) {
          goToNext()
        } else if (diffX < -50) {
          goToPrevious()
        }
      }
    }

    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [images.length, goToPrevious, goToNext])

  if (!images || images.length === 0) return null

  return (
    <motion.div
      className="image-zoom"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={handleBackgroundClick}
    >
      <div className="contenedor">
        <div className="iconooo">
          <div
            className="cont-icono"
            ref={closeBtnRef}
            onClick={handleClose}
          >
            <IoCloseSharp className="icon" />
          </div>
        </div>

        <div className="imagen-del-zoom">
          <img
            ref={imageRef}
            src={images[index]}
            alt="Imagen seleccionada"
            className="img-zoom"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ImageZoom
