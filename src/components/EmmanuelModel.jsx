import React, { useState } from 'react';

const EmmanuelModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Button to open the modal */}
      <span
        onClick={openModal}
        className="block text-emerald-800 hover:text-bold font-bold leading-8 cursor-pointer rounded-lg text-sm px-2 py-2.5"
      >
        Know more
      </span>

      {/* Modal structure */}
      {isModalOpen && (
        <div
          id="static-modal"
          className="fixed inset-0 mt-10 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50 px-4 sm:px-6 lg:px-8"
        >
          <div className="p-4 w-full max-w-lg sm:max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-lg border-t-8 border-t-emerald-800 overflow-y-auto max-h-[80vh]">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <button
                onClick={closeModal}
                type="button"
                className="text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
              <p>
              Plan. Emmanuel UWIZEYIMANA is certified urban planner in Rwanda, holding a Master’s in Geo-Information for Environment Sustainable Development, BSc in Urban Planning from University of Rwanda. Currently, He is working as a Building Construction Pre-Assessment Engineer in the City of Kigali with working expertise in sustainable urban planning, climate resilience, and sustainable land management, with hands-on experience in green building assessment and smart City Innovation technology. He also dedicated in promoting inclusive cities, and climate-resilient urban development, leveraging GIS and earth observation data to inform sustainable urban growth strategies across Rwanda and the entire world as a whole.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmmanuelModel;
