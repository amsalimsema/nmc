import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote:
      "After completing a large project 5 years ago, I set my camera down. It's taken me this long to pull down the wall I created around photographing people and come back to it. Annie's class has helped me to, basically, start over again.",
    author: 'Wendi',
    title: 'Photographer, USA',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 2,
    quote:
      "The techniques and insights shared in this course have completely transformed my approach to portrait photography. I've discovered a new way of connecting with my subjects.",
    author: 'Marcus',
    title: 'Portrait Photographer, UK',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 3,
    quote:
      "This masterclass wasn't just about photography—it was about finding my voice as an artist. The community and support have been invaluable to my growth.",
    author: 'Sarah',
    title: 'Fine Art Photographer, Canada',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className='min-h-screen bg-black text-white py-24'>
      <div className='max-w-7xl mx-auto px-4 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center mb-16'>
          See what our members are saying.
        </h2>

        <div className='relative'>
          <div className='overflow-hidden'>
            <div className='max-w-[95%] lg:max-w-[80%] mx-auto'>
              <div className='flex flex-col lg:grid lg:grid-cols-5 gap-0 lg:gap-8 items-center'>
                <div className='order-2 lg:order-1 relative z-10 bg-gray-900 p-8 lg:p-12 rounded-bl-2xl lg:rounded-l-3xl lg:col-span-3 lg:mr-[-2rem]'>
                  <blockquote>
                    <p className='text-lg md:text-xl text-gray-200 mb-6 leading-relaxed'>
                      "{currentTestimonial.quote}"
                    </p>
                    <footer>
                      <div className='font-medium text-white'>
                        {currentTestimonial.author}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {currentTestimonial.title}
                      </div>
                    </footer>
                  </blockquote>
                </div>

                <div className='order-1 lg:order-2 relative h-[300px] lg:h-[400px] w-full lg:col-span-2'>
                  <img
                    src={currentTestimonial.image}
                    alt={`Portrait of ${currentTestimonial.author}`}
                    className='absolute inset-0 w-full h-full object-cover object-center rounded-t-2xl lg:rounded-2xl'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className='hidden lg:block absolute left-[8%] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors z-20'
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>
          <button
            onClick={nextSlide}
            className='hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors z-20'
            aria-label='Next testimonial'
          >
            <ChevronRight className='w-6 h-6' />
          </button>

          {/* Dots */}
          <div className='flex justify-center gap-2 mt-8'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
