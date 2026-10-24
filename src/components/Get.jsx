export default function Features() {
  return (
    <div className='bg-black text-white py-16 px-4'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-gray-400 text-xl mb-6'>What You&apos;ll Get</h2>

        <div className='space-y-6'>
          <h3 className='text-3xl md:text-4xl font-bold'>
            Access our full library of 200+ classes
          </h3>

          <div className='space-y-4 text-xl md:text-2xl'>
            <p>Watch on your computer, TV, phone, or tablet</p>
            <p>Learn on the go with audio-only lessons</p>
            <p>Download and watch offline (select plans)</p>
            <p>Unlock improved learning with class guides</p>
            <p>Share with family and friends who live with you</p>
          </div>

          <div className='mt-12'>
            <button className='bg-[#E53C5D] hover:bg-[#d1354f] text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
