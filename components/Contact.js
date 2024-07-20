import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-10'>
            <p className=' text-xl md:text-2xl lg:text-4xl font-medium text-center'>Get a free trial lesson today</p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'>Start fulfilling your language dreams with our school</p>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
                <input type="text" className='px-5 py-5 rounded-2xl w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='Enter a email' />
                <button className='btn btn-sm p-5 lg:btn-lg bg-[#524fd5] btn-lg rounded-2xl border-none'>Send</button>
            </div>
    </div>
  )
}

export default Contact