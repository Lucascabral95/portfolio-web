import "./ImageZoom.scss"
import { motion } from "framer-motion"
import { IoCloseSharp } from "react-icons/io5";

const ImageZoom = ({ image, setIsOpenImage, isOpenImage }) => {
  return (
    <motion.div className='image-zoom'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="contenedor">

        <div className="iconooo">
          <div className="cont-icono" onClick={() => setIsOpenImage(!isOpenImage)}>
            <IoCloseSharp className="icon" />
          </div>
        </div>
        <div className="imagen-del-zoom">
          <img onClick={() => setIsOpenImage(!isOpenImage)} src={image} alt="Imagen seleccionada" className="img-zoom" />
        </div>

      </div>
    </motion.div>
  )
}

export default ImageZoom;