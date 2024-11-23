import React, { useRef } from 'react'
import { motion, useSpring, useTransform , useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export const CountUp = ({ end, duration = 2, prefix = '', suffix = '' }:CountUpProps) => {
  const springValue = useSpring(0, { duration: duration * 1000 })
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))
  const textContainer = useRef(null);

  const isInView = useInView(textContainer,{once:true});

  React.useEffect(() => {
    if(isInView) {
        springValue.set(end)
    }
  }, [end, springValue,isInView]);

  return (
    <div ref={textContainer} className="primary-header text-3xl sm:text-5xl">
      {prefix}
      <motion.span className=''>{displayValue}</motion.span>
      {suffix}
    </div>
  )
}
