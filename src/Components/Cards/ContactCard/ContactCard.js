import React from 'react'
const ContactCard = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center  p-5 Contactpage-overlay">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-orange-500">Contact Us</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ContactCard