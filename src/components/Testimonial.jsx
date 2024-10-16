import React from 'react'

const Testimonial = () => {
  return (
    <div class="pl-10 font-[sans-serif] mt-4 py-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
          <div class="col-span-2">
            <h2 class="text-pink-600 text-5xl font-bold">Testmonials</h2>
            
          </div>

          <div class="flex space-x-4 items-end justify-end">
            <div class="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-800 inline" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clip-rule="evenodd" data-original="#000000"></path>
              </svg>
            </div>
            <div class="bg-green-900 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clip-rule="evenodd" data-original="#000000"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-3 lg:gap-12 gap-6 mt-16">
          <div class="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
            <img src="https://readymadeui.com/team-2.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300" />

            <div>
              <h4 class="text-gray-800 text-base font-light">John Doe</h4>
              <p class="mt-1 text-xs text-gray-500">Urban Planner</p>
            </div>

            <div class="mt-4">
              <p class="text-gray-800 leading-relaxed font-light text-base">
              NGU-Link Hub has transformed our city's growth with innovative, sustainable solutions and a global network of urban stakeholders.
              </p>
            </div>

            <div class="flex space-x-1 mt-4">
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>

          <div class="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
            <img src="https://readymadeui.com/team-5.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300" />

            <div>
              <h4 class="text-gray-800 font-light text-base">Mark Adair</h4>
              <p class="mt-1  text-gray-500 font-light text-base">Government Official</p>
            </div>

            <div class="mt-4">
              <p class="text-gray-800  font-light text-base leading-relaxed">NGU-Link Hub gave us insights, resources, and expertise, helping tackle urban challenges and improve citizens' quality of life.</p>
            </div>

            <div class="flex space-x-1 mt-4">
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>

          <div class="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative">
            <img src="https://readymadeui.com/team-4.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300" />

            <div>
              <h4 class="text-gray-800 text-base font-light">Simon Konecki</h4>
              <p class="mt-1  text-gray-500 font-light text-base">Technology Provider</p>
            </div>

            <div class="mt-4">
              <p class="text-gray-800 font-light text-base leading-relaxed">NGU-Link Hub connected us with global city leaders, fostering collaboration, innovation, and showcasing our solutions worldwide.</p>
            </div>

            <div class="flex space-x-1 mt-4">
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-pink-600" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial