import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-20 border-b-2 pb-10 border-pink-400">
        <h1 className="text-7xl font-semibold text-[#F72C5B]">Featured Products</h1>
      </div>
      <div className="mt-10 px-20">
        <div className="cards w-full flex gap-20">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[60vh] relative"
          >
            {/* Animated Text */}
            <div className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#9bce65] z-[9] text-5xl uppercase font-semibold">
              {"Custraw".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            {/* Hover Zoom Effect */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full rounded-xl overflow-hidden"
            >
              <img
                className="w-full h-full bg-cover"
                src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Custraw"
              />
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-1/2 h-[60vh] relative"
          >
            {/* Animated Text */}
            <div className="absolute flex overflow-hidden left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#9bce65]  z-[9] text-5xl uppercase font-semibold">
              {"Biscoff".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            {/* Hover Zoom Effect */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full rounded-xl overflow-hidden"
            >
              <img
                className="w-full h-full bg-cover"
                src="https://plus.unsplash.com/premium_photo-1716398897688-c1c12c8c088e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Biscoff"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
