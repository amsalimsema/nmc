import React, { useState } from 'react'

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-b border-gray-800'>
      <button
        className='flex justify-between items-center w-full py-4 text-left text-white hover:text-gray-300 transition-colors'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className='ml-6 flex-shrink-0'>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className='pb-4 text-gray-400'>{children}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className='min-h-screen bg-black text-white py-16 px-4'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-2xl font-semibold mb-8'>
          Frequently asked questions
        </h2>

        {/* General Section */}
        <div className='mb-8'>
          <h3 className='text-sm text-gray-400 mb-3'>General</h3>
          <div className='space-y-2'>
            <AccordionItem title='What is NMC?'>
              NMC is the streaming platform that makes it possible for anyone to
              watch or listen to hundreds of video lessons taught by 180+ of the
              world's best.
              <br />
              <br />
              Whether it's in business and leadership, photography, cooking,
              writing, acting, music, sports and more, NMC delivers a world
              class online learning experience. Video lessons are available
              anytime, anywhere on your smartphone, personal computer, Apple TV
              and FireTV streaming media players.
            </AccordionItem>

            <AccordionItem title='What is included in a NMC membership?'>
              Your NMC membership provides you with unlimited access to all
              classes and new classes as they launch.
            </AccordionItem>

            <AccordionItem title='Where can I watch?'>
              You can watch on your phone, tablet, laptop, or TV using most web
              browsers or our apps for iOS, Android, and TV devices.
            </AccordionItem>

            <AccordionItem title='Which classes are right for me?'>
              NMC offers classes across a wide range of categories. Explore our
              catalog to find the classes that interest you most.
            </AccordionItem>
          </div>
        </div>

        {/* Pricing & Payment Section */}
        <div className='mb-8'>
          <h3 className='text-sm text-gray-400 mb-3'>Pricing & Payment</h3>
          <div className='space-y-2'>
            <AccordionItem title='How much does NMC cost?'>
              The annual membership is $180 and provides unlimited access to all
              classes and new classes as they launch.
            </AccordionItem>

            <AccordionItem title='Will I be charged forever?'>
              No, you can cancel your subscription at any time and your
              membership will continue until the end of your billing period.
            </AccordionItem>

            <AccordionItem title='How does the 30-day guarantee work?'>
              If you're not satisfied with your NMC experience, we'll offer a
              full refund within 30 days of your initial purchase.
            </AccordionItem>

            <AccordionItem title='How do I cancel?'>
              You can cancel your membership anytime through your account
              settings.
            </AccordionItem>
          </div>
        </div>

        {/* Sessions Section */}
        <div className='mb-8'>
          <h3 className='text-sm text-gray-400 mb-3'>Sessions</h3>
          <div className='space-y-2'>
            <AccordionItem title='What is Sessions by NMC and how are they different from classes?'>
              Sessions are structured 30-day curricula that guide you to learn
              and create through hands-on experience.
            </AccordionItem>

            <AccordionItem title='Are sessions included in my NMC subscription?'>
              Yes, Sessions are included with your NMC membership at no
              additional cost.
            </AccordionItem>

            <AccordionItem title='What skill level is required for Sessions?'>
              Sessions are designed for all skill levels, from beginners to
              advanced practitioners.
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  )
}
