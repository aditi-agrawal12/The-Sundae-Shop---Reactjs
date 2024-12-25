import React, { useEffect, useState, useRef } from 'react';

function Eyes() {

    const [rotate,setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
                setRotate(angle-180);
        })
    })

  return (
    <div className="eyes w-full h-screen overflow-hidden bg-[#E4F1AC] bg-contain">
      <div data-scroll data-scroll-speed='-.5' className="relative w-full h-2/3 bg-[url('./images/eyesback.jpg')] bg-no-repeat bg-center mt-20 -mb-20">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Left Eye */}
          <div className="w-[10vw] h-[10vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 bg-zinc-950 rounded-full relative flex justify-center items-center">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
          {/* Right Eye */}
          <div className="w-[10vw] h-[10vw] bg-zinc-100 rounded-full flex justify-center items-center">
          <div className="w-2/3 h-2/3 bg-zinc-950 rounded-full relative flex justify-center items-center">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
