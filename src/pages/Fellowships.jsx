import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Fellowships = () => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const countries = ['United States', 'Cuba', 'Rwanda', 'United Kingdom', 'Canada'];

  return (
    <div className="font-[sans-serif] py-10">
      <div className="h-[540px] font-[sans-serif]">
        <video
          src="/videos/urbanplan.mp4"
          className="w-full h-full object-cover"
          alt="Urban Planning"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="-mt-28 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
          <h2 className="text-2xl text-pink-500 font-bold">Fellow's Application Form</h2>

          <form className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Phone Number</label>
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={handlePhoneChange}
                inputClass="!w-full !rounded-md !py-2.5 !px-4 !border !border-gray-300 !text-sm !outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Country Of Residence</label>
              <select
                value={country}
                onChange={handleCountryChange}
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Level Of Education</label>
              <input
                type="text"
                placeholder="Enter your level of education"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Field Of Education</label>
              <input
                type="text"
                placeholder="Enter your field of education"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Work Organisation Or University</label>
              <input
                type="text"
                placeholder="Enter your work organisation or university"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Position</label>
              <input
                type="text"
                placeholder="Enter your position"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Name of Professional Body</label>
              <input
                type="text"
                placeholder="Enter the name of professional body"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Upload Your CV</label>
              <input
                type="file"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Upload Your Degree</label>
              <input
                type="file"
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-pink-600"
              />
            </div>

            <button
              type="button"
              className="text-white w-max bg-pink-600 hover:bg-pink-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2 inline"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send an Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fellowships;
