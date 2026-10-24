import React, { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { email, agreed })
  }

  return (
    <div className='bg-black text-white min-h-[300px] flex items-center'>
      <div className='w-full max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-start'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Try some of our classes
            </h2>
            <p className='text-gray-400 text-lg'>
              Enter your email and we'll send you some samples of our favorite
              classes.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='space-y-4'>
                <label className='block'>
                  <span className='text-sm font-medium mb-1.5 block'>
                    Email
                  </span>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex-1'>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-white'
                        placeholder='Enter Email Address'
                        required
                      />
                    </div>
                    <button
                      type='submit'
                      className='px-8 py-3 text-base font-medium text-white bg-transparent border border-white rounded-lg hover:bg-white/10 transition-colors md:w-auto w-full'
                    >
                      Submit
                    </button>
                  </div>
                </label>

                <label className='flex items-start gap-3 cursor-pointer group'>
                  <input
                    type='checkbox'
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className='mt-1 rounded border-gray-600 bg-[#1a1a1a] text-white focus:ring-gray-400'
                  />
                  <span className='text-sm text-gray-400 group-hover:text-gray-300'>
                    I agree to receive email updates
                  </span>
                </label>
              </div>

              <div>
                <p className='text-sm text-gray-400'>
                  By clicking "Sign up with Google", "Sign up with Facebook" or
                  by sharing your email, you agree to our{' '}
                  <a href='#' className='text-white hover:underline'>
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href='#' className='text-white hover:underline'>
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
