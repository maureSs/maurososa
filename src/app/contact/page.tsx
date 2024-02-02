'use client'
import Link from 'next/link';

import SocialMedia from './SocialMedia'
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className='inner-content'>
    <SocialMedia />
    <div className="flex flex-col justify-center space-y-4 email-buttons">
      <ContactForm />
      <button
        className="bg-gray hover:bg-[#3A3B3C] dark:bg-[#8a9196] dark:hover:bg-[#3A3B3C] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        <Link href="mailto:maurososa118@gmail.com">Send me an email</Link>
      </button>
    </div>
  </div>
  )
}

export default Contact;