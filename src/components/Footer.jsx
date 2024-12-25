import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen p-20 flex gap-5'>
        <div className='w-1/2 flex flex-col justify-between h-full'>
            <div className='heading font-semibold text-6xl uppercase'>
                <h1>Lorem</h1>
                <h1>Ipsum</h1>
            </div>
            <h3>The Sundae Shop</h3>
        </div>
        <div className='w-1/2 flex flex-col justify-between h-full font-semibold text-5xl uppercase'>
            <h1>Lorem ipsum dolor sit amet</h1>
        </div>
    </div>
  )
}

export default Footer