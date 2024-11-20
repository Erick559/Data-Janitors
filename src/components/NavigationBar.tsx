import React, { useState } from "react";
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'

import { navLinks } from '../../const';
import PrimaryButton from "./PrimaryButton";
const MobileNavigationBar = React.lazy(()=> import ("./MobileNavigationBar"));

const NavigationBar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setIsScrolling(false);
    if(latest > 160){
      setIsScrolling(true);
    }
  });

  const NavigationBarVariants = {
    scrolling: {backgroundColor:'rgb(255, 255, 255,0.5)',backdropFilter:'blur(20px)',color:'rgb(0, 0, 0)'},
    notScrolling: {backgroundColor:'rgb(255, 255, 255,0)'}
  }

  const childrenLinksVariants = {
    scrollingText: {color:'#000000'},
    notScrollingText:{color:'#ffffff'},
  }

  return (
    <motion.header variants={NavigationBarVariants} animate={isScrolling ? 'scrolling' : 'notScrolling'} transition={{duration:0.3,ease:'easeIn'}} className="fixed top-0 2 w-full py-3 px-3 flex items-center lg:px-20 z-20">
      <nav className="flex justify-between items-center w-full">
        <div>
          <img className="w-[70px] h-[55px] md:w-[80px] md:h-[60px]" src="/image-assets/data-janitors logo.png" width={200} height={200} alt="Data janitors logo featuring two caricatures holding mopes" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-3 md:gap-5 xl:gap-10">
            {navLinks.map((link,index)=>(
              <motion.li initial='initial' whileHover='hover' animate='initial' className="relative" key={index}>
                <div><motion.a variants={childrenLinksVariants} animate= {isScrolling ?'scrollingText':'notScrollingText'} className="text-slate-50 font-semibold hover:underline" href={link.path}>{link.title}</motion.a></div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
            <PrimaryButton type="primary" className="px-5 py-3 rounded-xl">
              Signup to our Wishlist
            </PrimaryButton>
        </div>
        <div className="flex items-center md:hidden">
          <MobileNavigationBar />
        </div>
      </nav>
    </motion.header>
  )
}

export default NavigationBar
