import React from 'react'


function Navbar() {
  return (
    <div className=" fixed z-[999] w-full px-20 py-4 flex justify-between items-center font-['gilroy'] bg-zinc-100">
        <div className='logo'>
            <h3 className="font-semibold text-2xl ">The Sundae Shop</h3>
        </div>
        <div className='links flex gap-10'>
            {["Home", "Products", "About", "Contact"].map((item, index) => (
                <a key={index} className="text-md capitalize">{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar;
