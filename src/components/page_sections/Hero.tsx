import {motion} from 'framer-motion'
import PrimaryButton from '../PrimaryButton'
import FloatingBubbles from '../FloatingBubble'
import FloatingStars from '../FloatingStars'
import HeroImages from '../HeroImages'

interface Hero {
    imageVariants:{}
};

const Hero = ({imageVariants}:Hero) => {
  const sweepVariants = {
    animate: {
      rotate: ['-3deg', '3deg', '-3deg'],
    }
  };
    
  return (
    <section id="hero" className="hero lg:min-h-screen overflow-hidden relative">
    <main className='h-full py-[150px] px-3 flex flex-col items-center justify-center md:justify-start gap-10 md:gap-24'>
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring", bounce:0.5, duration:1}} className="flex w-full justify-center z-[1]">
        <motion.h1 animate={{rotate:['-3deg','3deg','-3deg']}} transition={{duration:1,repeat:Infinity,repeatDelay:10 }} className="font-Rubik text-[#fc472e] leading-[90px] md:leading-[170px] xl:leading-[220px] text-center tracking-[5px] md:tracking-[10px] md:-rotate-[5.77deg] font-black main-header">DATA JANITORS</motion.h1>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center w-full gap-3 z-10">
        <PrimaryButton type="primary" className="px-7 py-6 text-[16px] rounded-xl shadow-sm z-[1]">
          Signup to our Wishlist
        </PrimaryButton>

        <PrimaryButton type="ghost" className="px-7 py-6 text-[16px] rounded-xl shadow-sm z-[1]">
          Schedule Free Consultation
        </PrimaryButton>
      </div>


      <div className='absolute inset-0'>
        <FloatingBubbles />
        <FloatingStars />
        <HeroImages 
          src='../../image-assets/soap.png' 
          alt='A pink soap floating at the top right of the screen resembling clean data from Data janitors' 
          className='absolute top-0 right-0 w-fluid-image z-[1]' 
          variants={imageVariants} animate='animate' 
          transition={{duration:2,ease:'easeInOut',repeat:Infinity}} 
        />

        <HeroImages 
          src='../../image-assets/glove.png' 
          alt='A cleaning glove at the bottom left of the screen resembling how hands on and deep Data Janitors are when it comes to cleaning data.' 
          className='absolute bottom-0 -left-10 md:bottom-10 md:left-0 z-[1] w-fluid-image-small' 
          variants={sweepVariants} animate='animate' 
          transition={{duration:2,ease:'easeInOut',repeat:Infinity,delay:3,repeatDelay:10}} 
        />

        <HeroImages 
          src='../../image-assets/brush.png' 
          alt='A cleaning brush at the bottom right of the screen resembling how hands on and deep Data Janitors are when it comes to cleaning data.' 
          className='absolute -right-20 -bottom-10 md:right-0 z-[1] w-fluid-image' 
          variants={sweepVariants} animate='animate' 
          transition={{duration:2,ease:'easeInOut',repeat:Infinity,delay:7,repeatDelay:5}} 
        />

        <div className="absolute top-0 left-0 z-0 hidden">
          <img src="../../image-assets/mop.webp" alt=""  className='w-[200px]'/>
        </div>
      </div>
    </main>
  </section>  )
}

export default Hero
