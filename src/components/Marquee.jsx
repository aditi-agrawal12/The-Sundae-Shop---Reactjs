import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-10 bg-[#A7D477] -mt-16 rounded-t-3xl">
      <div className='text border-t-2 border-b-2 border-zinc-100 overflow-hidden whitespace-nowrap flex '>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8}}
          className='text-[12vw] uppercase text-zinc-100 font-bold pr-10'
        >
          Eat Before it melts
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className='text-[12vw] uppercase text-zinc-100 font-bold pr-10'
        >
          Eat Before it melts
        </motion.h1>

        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className='text-[12vw] uppercase  text-zinc-100 font-bold'
        >
          Eat.Before.it.melts.
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
