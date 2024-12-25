import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 px-20 items-center'>
        <div className='cardcontainer w-1/2  h-[50vh]'>
            <div className='card w-full h-full bg-[url("https://png.pngtree.com/background/20230424/original/pngtree-pancakes-with-syrup-on-a-black-plate-covered-in-strawberries-picture-image_2456658.jpg")] rounded-xl bg-cover bg-no-repeat'></div>
        </div>
        <div className='cardcontainer w-1/2  h-[50vh] flex gap-5'>
            <div className='card w-1/2 h-full bg-[url("https://zhangcatherine.com/wp-content/uploads/2021/09/P9250020-768x1024.jpg")] bg-cover rounded-xl'></div>
            <div className='card w-1/2 h-full bg-[url("https://i.pinimg.com/736x/82/84/30/828430d189a6e6a6687b1f9ee088db29.jpg")] bg-cover rounded-xl'></div>
        </div>
    </div>
  )
}

export default Cards