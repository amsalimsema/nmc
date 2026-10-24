export default function PricingHeader() {
  return (
    <div className='min-h-[50vh] bg-black text-white flex items-center justify-center'>
      <div className='max-w-4xl mx-auto px-4 py-16 text-center'>
        <h1 className='text-4xl md:text-6xl font-normal mb-6 tracking-tight'>
          Start your journey today.
        </h1>
        <p className='text-lg md:text-xl text-gray-300 mb-8'>
          Choose from 3 plans. Starting at{' '}
          <span className='text-white font-medium'>$5/month</span>, billed
          annually.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors'>
            Sign Up
          </button>
          <button className='inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors'>
            Explore Classes
          </button>
        </div>
      </div>
    </div>
  )
}
