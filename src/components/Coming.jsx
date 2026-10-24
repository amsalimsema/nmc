import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const upcomingContent = [
  {
    id: 1,
    title: 'THE POWER OF MINDSET',
    subtitle: 'With Leading Experts',
    image:
      'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagePortrait:
      'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80',
    month: 'Jan',
    gradient: 'from-black/60 to-black/40',
  },
  {
    id: 2,
    title: 'DIANE WARREN',
    subtitle: 'A Documentary by Bess Kargman',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagePortrait:
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    month: 'Feb',
    gradient: 'from-red-900/60 to-red-900/40',
  },
  {
    id: 3,
    title: 'THE FUTURE OF AI',
    subtitle: 'A Deep Dive into Tomorrow',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagePortrait:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    month: 'Jan',
    gradient: 'from-blue-900/60 to-blue-900/40',
  },
  {
    id: 4,
    title: 'CREATIVE LEADERSHIP',
    subtitle: 'Innovation in Modern Business',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imagePortrait:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    month: 'Feb',
    gradient: 'from-purple-900/60 to-purple-900/40',
  },
]

export default function ComingSoon() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerSlide = 2
  const totalSlides = Math.ceil(upcomingContent.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalSlides - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='h-auto md:min-h-screen bg-black text-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-semibold mb-8'>Coming Soon</h1>

        <div className='relative'>
          {/* Carousel */}
          <div className='overflow-hidden relative rounded-2xl mb-4'>
            <div
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className='w-full flex-shrink-0 flex gap-4'
                >
                  {upcomingContent
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((content) => (
                      <div
                        key={content.id}
                        className='flex-1 relative sm:aspect-[16/9] aspect-[3/4] min-h-[400px]'
                      >
                        <picture>
                          <source
                            media='(max-width: 639px)'
                            srcSet={content.imagePortrait}
                          />
                          <source
                            media='(min-width: 640px)'
                            srcSet={content.image}
                          />
                          <img
                            src={content.image}
                            alt={content.title}
                            className='absolute inset-0 w-full h-full object-cover rounded-xl'
                          />
                        </picture>
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${content.gradient} rounded-xl`}
                        />

                        {/* Content */}
                        <div className='absolute inset-0 p-6 flex flex-col justify-between'>
                          <div>
                            <span className='inline-block px-3 py-1 bg-white text-black rounded-full text-sm font-medium'>
                              {content.month}
                            </span>
                          </div>
                          <div className='max-w-sm'>
                            <h2 className='text-2xl md:text-3xl font-bold mb-2 tracking-wider'>
                              {content.title}
                            </h2>
                            <p className='text-sm md:text-base text-gray-200'>
                              {content.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className='absolute left-0 top-0 bottom-0 px-4 hidden sm:flex items-center justify-center bg-gradient-to-r from-black/50 to-transparent hover:from-black/75 transition-all'
              aria-label='Previous slide'
            >
              <ChevronLeft className='w-8 h-8' />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-0 top-0 bottom-0 px-4 hidden sm:flex items-center justify-center bg-gradient-to-l from-black/50 to-transparent hover:from-black/75 transition-all'
              aria-label='Next slide'
            >
              <ChevronRight className='w-8 h-8' />
            </button>
          </div>

          {/* Dots - Now outside the slide */}
          <div className='flex justify-center gap-2 mt-4'>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
