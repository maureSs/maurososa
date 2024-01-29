'use client'
import { useState } from 'react'

  function ContactForm() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    return (
        <>
          <button
            onClick={openModal}
            className="mb-8 bg-brand hover:bg-[#3A3B3C] dark:bg-[#76A8CA] dark:hover:bg-[#3A3B3C] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Contact Form
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center text-black">
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className="bg-white p-8 rounded-lg z-50">
                <h2 className="text-center mb-4 text-xl font-bold">Complete the form</h2>
                <div className="text-center">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        placeholder="Message"
                        className="w-full p-2 border rounded resize-vertical h-32"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="mr-3 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                      >
                        Send me an email
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </>
    )
  }
  
  export default ContactForm