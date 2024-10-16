import React from 'react';

const Contact = () => {
  return (
    <div className='py-12 md:py-48 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start'>
      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31899.819102314075!2d30.1367296!3d-1.9628031999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1723887950760!5m2!1sen!2srw"
        className="w-full px-8 h-96 md:h-450 border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        
      ></iframe>

      {/* Contact Information */}
      <div className="mt-6 md:mt-0 bg-white p-6 md:p-8 shadow-md rounded-lg border  max-w-md mx-auto">
        <div className="grid gap-8">
          <div>
            <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-500 mt-4">
              Have some big idea or brand to develop and need help? Then reach out—we'd love to hear about your project and provide help.
            </p>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#ffffff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                    </svg>
                  </div>
                  <a href="mailto:info@example.com" className="text-black text-sm ml-4">
                    <small className="block">Mail</small>
                    <strong>info@example.com</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>
              <ul className="flex mt-4 space-x-4">
                {/* Social Icons */}
                <li className="bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#ffffff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" />
                    </svg>
                  </a>
                </li>
                <li className="bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#ffffff"
                      viewBox="0 0 511 512"
                    >
                      <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.398c8.281 0 15-6.715 15-15v-160.48c0-41.715 22.766-65.805 60.398-65.805 36.383 0 52.102 26.719 52.102 65.805v160.48c0 8.285 6.715 15 15 15H486c8.285 0 15-6.715 15-15V203.812c0-8.281-6.715-15-15-15h-66.297c-6.818 0-14.068 6.022-14.942 13.664-20.135-10.281-42.598-15.777-65.398-15.777zm60.398 75.77c-18.384 0-30.48 14.757-30.48 39.312v131.586h-30.102V232.555h30.102V239.66c4.584-6.797 13.442-15.66 29.617-15.66 22.818 0 32.102 14.5 32.102 38.415v172.715h-30.102V280.953c0-23.57-9.973-32.04-25.848-32.04z" />
                    </svg>
                  </a>
                </li>
                <li className="bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#ffffff"
                      viewBox="0 0 500 500"
                    >
                      <path d="M250 0c-138.497 0-250 111.503-250 250s111.503 250 250 250 250-111.503 250-250S388.497 0 250 0zm0 472c-122.262 0-222-99.738-222-222S127.738 28 250 28 472 127.738 472 250 372.262 472 250 472zm105.057-230.856c-12.953 18.673-30.932 29.308-52.057 29.308-37.758 0-63.813-28.837-63.813-68.444 0-39.831 26.002-67.716 63.064-67.716 16.886 0 31.895 5.959 43.84 17.178l-14.014 19.443c-6.811-8.622-17.891-13.736-29.84-13.736-19.211 0-31.829 15.245-31.829 35.982 0 20.553 12.462 35.125 31.059 35.125 18.537 0 29.404-12.661 32.163-19.658l-29.66-12.378c.946 17.642 12.135 29.918 29.068 29.918 9.898 0 16.76-4.153 21.928-10.82l-30.245-11.956c3.73 14.908 15.85 23.691 31.127 23.691 16.078 0 26.479-9.925 33.007-18.703l-.001-.002zm-127.731-41.455c-16.893 0-28.553-13.183-28.553-30.248 0-16.925 11.516-30.168 28.354-30.168 16.836 0 27.838 13.182 27.838 30.248 0 17.098-11.063 30.12-27.57 30.12z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
