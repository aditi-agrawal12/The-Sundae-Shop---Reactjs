import React from 'react'

function About() {
  return (
    <div className="w-full p-10  rounded-t-3xl ">
        <h1 className='text-4xl'>Welcome to The Sundae Shop, where every scoop is crafted with love, joy, and a sprinkle of magic! Indulge in our wide range of mouth-watering flavors, from creamy classics to adventurous creations that will tantalize your taste buds.</h1>
        <div className='w-full pt-16 flex gap-5'>
          <div className='w-1/2'>
            <h1 className='text-4xl font-semibold text-[#F72C5B]'>Our Products</h1>
            <button className='px-12 py-3 text-white bg-[#A7D477] rounded-full mt-8 flex gap-4 items-center uppercase text-sm'>Check Out
              <div className='w-2 h-2 bg-white rounded-full'></div>
            </button>
          </div>
          <div className="w-1/2 h-[55vh] bg-[url('https://plus.unsplash.com/premium_photo-1661266841331-e2169199de65?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-2xl bg-cover bg-no-repeat"></div>
        </div>
    </div>
  )
}

export default About