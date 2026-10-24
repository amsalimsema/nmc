import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const NollywoodHero = () => {
  const [imageIndex, setImageIndex] = useState(0)

  const images = [
    [
      'https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1591470481729-2bcc11e3acb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwcGVyc29ufGVufDB8MXwwfHx8Mg%3D%3D',
      'https://images.unsplash.com/photo-1531901599143-df5010ab9438?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533435137002-455932c8538f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    [
      'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    ],
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images[0].length)
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <motion.section
      className='font-nunito min-h-screen md:h-screen flex flex-col md:flex-row md:items-center bg-black overflow-hidden'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='container mx-auto px-4 pt-8 md:py-0'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12'>
          {/* Left side with copy */}
          <motion.div
            className='w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left'
            variants={containerVariants}
          >
            <motion.h1
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'
              variants={itemVariants}
            >
              Unlock the <span className='text-[#ccff00]'>Magic</span> of
              Nollywood
            </motion.h1>
            <motion.p
              className='text-xl md:text-2xl text-gray-300 leading-relaxed'
              variants={itemVariants}
            >
              Learn from Nigeria's top filmmakers and actors. Transform your
              passion into cinematic brilliance.
            </motion.p>
            <motion.div
              className='mt-8 flex justify-center md:justify-start space-x-4'
              variants={itemVariants}
            >
              <motion.button
                className='bg-[#ccff00] text-black font-bold py-2 px-6 rounded-full hover:bg-[#a3cc00] transition duration-300'
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
              >
                Sign up
              </motion.button>
              <motion.button
                className='bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition duration-300'
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
              >
                Explore classes
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side with image grid */}
          <motion.div
            className='w-full md:w-1/2 relative h-[600px] md:h-[600px] overflow-hidden'
            variants={containerVariants}
          >
            <motion.div
              className='grid grid-cols-2 gap-4 h-full md:transform md:rotate-10 md:origin-bottom-left md:translate-x-8 z-0'
              initial={{ rotate: 0, x: -100, opacity: 0 }}
              animate={{
                rotate: [null, 10],
                x: [null, 32],
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                rotate: { delay: 0.2, duration: 0.5 },
                x: { delay: 0.2, duration: 0.5 },
              }}
            >
              {/* Left column */}
              <div className='flex flex-col space-y-4 h-full'>
                <motion.div
                  className='relative overflow-hidden rounded-lg h-[60%]'
                  variants={itemVariants}
                >
                  <img
                    src={images[0][(imageIndex + 4) % images[0].length]}
                    alt='Nollywood scene'
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 image-hover'
                  />
                  <div className='absolute inset-0 bg-black opacity-70'></div>
                </motion.div>
                <motion.div
                  className='relative overflow-hidden rounded-lg h-[40%]'
                  variants={itemVariants}
                >
                  <img
                    src={images[0][imageIndex]}
                    alt='Celebrity on red carpet'
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 image-hover'
                  />
                </motion.div>
              </div>

              {/* Right column */}
              <div className='flex flex-col space-y-4 h-full'>
                <motion.div
                  className='relative overflow-hidden rounded-lg h-[40%]'
                  variants={itemVariants}
                >
                  <img
                    src={images[1][(imageIndex + 4) % images[1].length]}
                    alt='Nollywood production'
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 image-hover'
                  />
                  <div className='absolute inset-0 bg-black opacity-70'></div>
                </motion.div>
                <motion.div
                  className='relative overflow-hidden rounded-lg h-[60%]'
                  variants={itemVariants}
                >
                  <img
                    src={images[1][imageIndex]}
                    alt='Actress at film premiere'
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 image-hover'
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black to-transparent z-10 md:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            ></motion.div>
            <motion.div
              className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black to-transparent z-10 md:transform md:rotate-10 md:origin-bottom-left md:translate-y-[20px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      <style jsx='true'>{`
        .image-hover {
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        }
        .image-hover:hover {
          transform: scale(1.02);
          filter: brightness(0.8);
        }
        .rotate-10 {
          transform: rotate(10deg);
        }
      `}</style>
    </motion.section>
  )
}

export default NollywoodHero
