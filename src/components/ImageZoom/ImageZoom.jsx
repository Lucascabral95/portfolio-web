import "./ImageZoom.scss"
import { motion } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5"
import { useRef } from "react"

const ImageZoom = ({ image, setIsOpenImage, isOpenImage }) => {
  const imageRef = useRef(null)
  const closeBtnRef = useRef(null)

  const handleBackgroundClick = (e) => {
    if (
      imageRef.current?.contains(e.target) ||
      closeBtnRef.current?.contains(e.target)
    ) {
      return
    }
    setIsOpenImage(false)
  }

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
            onClick={() => setIsOpenImage(!isOpenImage)}
          >
            <IoCloseSharp className="icon" />
          </div>
        </div>

        <div className="imagen-del-zoom">
          <img
            ref={imageRef}
            src={image}
            alt="Imagen seleccionada"
            className="img-zoom"
          />
        </div>

      </div>
    </motion.div>
  )
}

export default ImageZoom
