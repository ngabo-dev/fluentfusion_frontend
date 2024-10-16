import React from 'react'


const Joinus = () => {
    const images = [
        { imgURL: '/Green.jpg', imgAlt: 'Image 1' },
        { imgURL: '/Nature based solution.jpeg', imgAlt: 'Image 2' },
        { imgURL: '/Climate change in city.jpeg', imgAlt: 'Image 3' },
      ];
  return (
    <>

    <div class="bg-green-900 font-[sans-serif] mt-28 mx-20 px-6">
      <div class="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
        <div class="md:h-[400px]">
          <img src="/Green.jpg" class="w-full h-full rounded-lg p-4 object-cover" />
        </div>

        <div class="max-md:text-center">
          <h3 class="text-white font-semibold md:text-3xl text-2xl md:leading-10 capitalize">Be apart with us</h3>
          <p class=" mt-4 font-light text-base text-white p-3.5  leading-relaxed">Join us in shaping the future of our cities! At NGU Link hub, we believe that collective action is key to addressing the complex challenges of urbanization. Here’s how you can be part of our mission to create resilient, inclusive, and smart cities
          </p>
          <div className='font-[sans-serif] space-x-12 space-y-4 '>
          <button type="button"
        class="px-5 py-2.5 rounded-lg tracking-wider font-light text-base text-white p-3.5  outline-none bg-pink-600 hover:bg-pink-500 active:bg-pink-600 capitalize">Participate our events</button>

      <button type="button"
        class="px-5 py-2.5 rounded-lg  tracking-wider font-light text-base text-white p-3.5  outline-none bg-pink-600 hover:bg-pink-500 active:bg-pink-600 capitalize">Join us</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Joinus