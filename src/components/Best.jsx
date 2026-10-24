import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <div className='min-h-[500px] bg-black text-white px-4 md:px-6 lg:px-8 py-12'>
      {/* Main Title Section */}
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
            Meet the world&apos;s best.
          </h1>
          <p className='text-xl md:text-2xl text-white/90'>
            New classes added every month.
          </p>
        </div>

        {/* Featured Content */}
        <div className='relative'>
          <div className='relative aspect-[3/4] md:aspect-video rounded-lg overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=768&h=1024&q=80'
              alt='Woman in red blazer smiling at camera'
              className='w-full h-full object-cover md:hidden'
            />
            <img
              src='https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=1280&q=80'
              alt='Woman in red blazer sitting at a desk with books and office supplies'
              className='hidden md:block w-full h-full object-cover'
            />

            {/* Instructor Info Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent'>
              <div className='flex flex-col items-start gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='px-2 py-1 bg-white text-black text-xs font-medium rounded-full'>
                    New
                  </span>
                  <h2 className='text-2xl font-semibold'>
                    Scripting Your Own Success
                  </h2>
                </div>

                <button className='flex items-center px-4 py-2 bg-white/10 text-white border border-white/20 rounded-md hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm'>
                  <Play className='w-4 h-4 mr-2' />
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
