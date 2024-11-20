import { motion } from "framer-motion"

interface HeroImages {
    className:string,
    src:string,
    variants?:{},
    animate?:string,
    transition?:{},
    alt:string,
}

const HeroImages = ({className,src,alt,animate,variants,transition}:HeroImages) => {
  return (
    <motion.img src={src} alt={alt} className={`${className}`} animate={animate} variants={variants} transition={transition} />
  )
}

export default HeroImages
