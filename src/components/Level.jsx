export default function EnterpriseHero() {
  return (
    <div className='h-auto md:min-h-screen bg-[#1a1a1a] text-white py-16 sm:py-24'>
      <div className='max-w-7xl mx-auto px-4 lg:px-8'>
        <div className='bg-black/80 rounded-lg overflow-visible p-4 sm:p-6 lg:p-12 relative'>
          <div className='grid lg:grid-cols-10 gap-8 sm:gap-12 lg:gap-8 items-center'>
            {/* Image Section */}
            <div className='lg:col-span-4 lg:col-start-2 relative h-[210px] sm:h-[300px] lg:h-[450px] overflow-visible px-8 sm:px-12 -mx-4 sm:-mx-6 lg:mx-0 -my-8 sm:-my-12 lg:-my-24'>
              <div className='absolute inset-y-0 left-8 right-8 sm:left-12 sm:right-12'>
                <picture>
                  <source
                    media='(max-width: 639px)'
                    srcSet='https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
                  />
                  <source
                    media='(min-width: 640px)'
                    srcSet='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                  />
                  <img
                    src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                    alt='Professional reviewing documents'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </picture>
                <div className='absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-lg' />
              </div>
            </div>

            {/* Content Section */}
            <div className='lg:col-span-4 lg:pl-4 py-4 sm:py-6 text-center lg:text-left'>
              <div className='max-w-xl mx-auto lg:mx-0'>
                <p className='text-sm sm:text-base lg:text-lg text-gray-300 mb-2 sm:mb-3'>
                  NMC <span className='text-gray-400'>at Work</span>
                </p>

                <h1 className='text-xl sm:text-2xl lg:text-4xl font-semibold tracking-tight leading-tight mb-4 sm:mb-6 text-white'>
                  LEVEL UP YOUR TEAM
                </h1>

                <p className='text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
                  See why leading organizations rely on NMC for learning &
                  development.
                </p>

                <div className='flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start'>
                  <button className='inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors'>
                    Contact Sales
                  </button>
                  <button className='inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-gray-300 hover:text-white transition-colors group'>
                    Learn More
                    <svg
                      className='ml-2 w-3 h-3 sm:w-4 sm:h-4 transform transition-transform group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
