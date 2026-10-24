// import { useState, useEffect } from 'react'
// import { Search, ChevronDown, ChevronUp, Menu, X } from 'lucide-react'

// const modalOpenClass = 'modal-open'

// export default function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const [isSearchFocused, setIsSearchFocused] = useState(false)
//   const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

//   const categories = [
//     'Directing',
//     'Acting',
//     'Screenwriting',
//     'Cinematography',
//     'Film Editing',
//     'Production Design',
//     'Sound Design',
//     'Visual Effects',
//     'Costume Design',
//     'Makeup & Hair',
//     'Film Scoring',
//     'Film Production',
//   ]

//   const popularSearches = [
//     'Directing',
//     'Genevieve Nnaji',
//     'Screenwriting',
//     'Kunle Afolayan',
//     'Film Editing',
//     'Kemi Adetiba',
//     'Visual Effects',
//     'Ramsey Nouah',
//   ]

//   useEffect(() => {
//     return () => {
//       document.body.classList.remove(modalOpenClass)
//     }
//   }, [])

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen)
//     if (isSearchFocused) setIsSearchFocused(false)
//     document.body.classList.toggle(modalOpenClass, !isDropdownOpen)
//   }

//   const handleSearchFocus = () => {
//     setIsSearchFocused(true)
//     if (isDropdownOpen) setIsDropdownOpen(false)
//   }

//   const SideDrawer = () => (
//     <div
//       className={`fixed inset-0 bg-black z-50 transform ${
//         isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
//       } transition-transform duration-300 ease-in-out`}
//     >
//       <div className='h-full overflow-y-auto font-nunito'>
//         <div className='p-4 font-nunito'>
//           <div className='flex justify-between items-center mb-6 font-nunito'>
//             <h2 className='text-xl font-bold font-nunito'>Menu</h2>
//             <button
//               onClick={() => setIsSideDrawerOpen(false)}
//               className='font-nunito'
//             >
//               <X className='h-6 w-6' />
//             </button>
//           </div>
//           <div className='mb-6 font-nunito'>
//             <div className='relative font-nunito'>
//               <div className='absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none'>
//                 <Search className='h-5 w-5 text-gray-400' />
//               </div>
//               <input
//                 type='search'
//                 placeholder='Search classes, instructors, sessions and more'
//                 className='block w-full bg-[#161616] border border-transparent rounded-md py-2 pl-16 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-[#202020] focus:border-gray-500 focus:ring-1 focus:ring-gray-500 ml-4 font-nunito'
//                 onFocus={handleSearchFocus}
//                 onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
//               />
//             </div>
//             {isSearchFocused && (
//               <div className='mt-2 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 z-50 font-nunito'>
//                 <div
//                   className='py-1 font-nunito'
//                   role='menu'
//                   aria-orientation='vertical'
//                 >
//                   <div className='px-4 py-2 text-sm text-gray-400 font-nunito'>
//                     Popular Searches
//                   </div>
//                   {popularSearches.map((search) => (
//                     <a
//                       key={search}
//                       href='#'
//                       className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
//                       role='menuitem'
//                     >
//                       {search}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className='space-y-6 font-nunito'>
//             <a
//               href='/plans'
//               className='block text-lg hover:text-gray-300 font-nunito'
//             >
//               View Plans
//             </a>
//             <a
//               href='/gifts'
//               className='block text-lg hover:text-gray-300 md:hidden font-nunito'
//             >
//               Gifts
//             </a>
//             <a
//               href='/support'
//               className='block text-lg hover:text-gray-300 md:hidden font-nunito'
//             >
//               Support
//             </a>
//             <a
//               href='/login'
//               className='block text-lg hover:text-gray-300 font-nunito'
//             >
//               Log In
//             </a>
//             <div className='my-6 text-center font-nunito'>
//               <p className='text-lg font-semibold'>Learn something new today</p>
//               <p className='text-sm text-gray-400'>
//                 Get all 200+ classes across 11 categories.
//               </p>
//             </div>
//             <a
//               href='/signup'
//               className='block w-full text-center px-4 py-2 border border-transparent text-lg font-medium rounded-md text-black bg-[#CCFF00] hover:bg-[#A3CC00] transition-colors font-nunito'
//             >
//               Sign Up
//             </a>
//             <p className='mt-2 text-sm text-center text-gray-400 font-nunito'>
//               Starting at $5/month (billed annually)
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
//   useEffect(() => {
//     document.body.classList.add(modalOpenClass)
//     return () => {
//       document.body.classList.remove(modalOpenClass)
//     }
//   }, [])
//   return (
//     <nav
//       className='bg-black text-white font-nunito relative'
//       style={{
//         '--modal-open-overflow': 'hidden',
//         '--modal-open-padding-right': '15px', // Adjust this value based on the width of your scrollbar
//       }}
//     >
//       <div className='max-w-7xl mx-auto px-4 sm:px-6'>
//         <div className='flex items-center justify-between h-16'>
//           {/* Logo */}
//           <a href='/' className='flex-shrink-0 font-nunito'>
//             <svg
//               width='120'
//               height='32'
//               viewBox='0 0 120 32'
//               fill='none'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <text
//                 x='5'
//                 y='24'
//                 fontFamily='Arial, sans-serif'
//                 fontSize='24'
//                 fontWeight='bold'
//                 fill='#CCFF00'
//               >
//                 NMC
//               </text>
//             </svg>
//           </a>

//           {/* Browse - Desktop */}
//           <div className='hidden md:flex relative ml-6 h-full items-center'>
//             <div className='relative'>
//               <button
//                 className='flex items-center text-sm font-medium hover:text-gray-300 font-nunito'
//                 onClick={handleDropdownToggle}
//               >
//                 Browse
//                 {isDropdownOpen ? (
//                   <ChevronUp className='ml-1 h-4 w-4' />
//                 ) : (
//                   <ChevronDown className='ml-1 h-4 w-4' />
//                 )}
//               </button>
//               <div className='absolute h-4 w-full left-0 bottom-[-16px]' />
//               {isDropdownOpen && (
//                 <div className='absolute top-full left-0 mt-4 w-56 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 z-50 font-nunito'>
//                   <div
//                     className='py-1 font-nunito'
//                     role='menu'
//                     aria-orientation='vertical'
//                     aria-labelledby='options-menu'
//                   >
//                     {categories.map((category) => (
//                       <a
//                         key={category}
//                         href='#'
//                         className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
//                         role='menuitem'
//                       >
//                         {category}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Search and Navigation - Desktop */}
//           <div className='hidden md:flex items-center flex-1'>
//             <div className='flex-1 max-w-2xl mr-6 relative font-nunito'>
//               <div className='relative font-nunito'>
//                 <div className='absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none'>
//                   <Search className='h-5 w-5 text-gray-400' />
//                 </div>
//                 <input
//                   type='search'
//                   placeholder='Search classes, instructors, sessions and more'
//                   className='block w-full bg-[#161616] border border-transparent rounded-md py-2 pl-16 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-[#202020] focus:border-gray-500 focus:ring-1 focus:ring-gray-500 ml-4 font-nunito'
//                   onFocus={handleSearchFocus}
//                   onBlur={() =>
//                     setTimeout(() => setIsSearchFocused(false), 200)
//                   }
//                 />
//               </div>
//               {isSearchFocused && (
//                 <div className='absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 z-50 font-nunito'>
//                   <div
//                     className='py-1 font-nunito'
//                     role='menu'
//                     aria-orientation='vertical'
//                   >
//                     <div className='px-4 py-2 text-sm text-gray-400 font-nunito'>
//                       Popular Searches
//                     </div>
//                     {popularSearches.map((search) => (
//                       <a
//                         key={search}
//                         href='#'
//                         className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
//                         role='menuitem'
//                       >
//                         {search}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div className='flex items-center space-x-6 ml-auto font-nunito'>
//               <a
//                 href='/plans'
//                 className='text-sm hover:text-gray-300 font-nunito'
//               >
//                 View Plans
//               </a>
//               <a
//                 href='/login'
//                 className='text-sm hover:text-gray-300 font-nunito'
//               >
//                 Log In
//               </a>
//               <a
//                 href='/signup'
//                 className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-[#CCFF00] hover:bg-[#A3CC00] transition-colors font-nunito'
//               >
//                 Sign Up
//               </a>
//             </div>
//           </div>

//           {/* Mobile Controls */}
//           <div className='flex items-center md:hidden'>
//             {/* Browse - Mobile */}
//             <div className='relative mr-2'>
//               <div className='relative'>
//                 <button
//                   className='flex items-center text-sm font-medium hover:text-gray-300 font-nunito'
//                   onClick={handleDropdownToggle}
//                 >
//                   Browse
//                   {isDropdownOpen ? (
//                     <ChevronUp className='ml-1 h-4 w-4' />
//                   ) : (
//                     <ChevronDown className='ml-1 h-4 w-4' />
//                   )}
//                 </button>
//               </div>
//               {isDropdownOpen && (
//                 <div className='fixed inset-0 bg-black z-[60] overflow-y-auto font-nunito'>
//                   <div className='p-4 font-nunito'>
//                     <div className='flex justify-between items-center mb-4 font-nunito'>
//                       <h2 className='text-xl font-bold font-nunito'>Browse</h2>
//                       <button
//                         onClick={() => setIsDropdownOpen(false)}
//                         className='font-nunito'
//                       >
//                         <X className='h-6 w-6' />
//                       </button>
//                     </div>
//                     <div
//                       className='py-1 font-nunito'
//                       role='menu'
//                       aria-orientation='vertical'
//                       aria-labelledby='options-menu'
//                     >
//                       {categories.map((category) => (
//                         <a
//                           key={category}
//                           href='#'
//                           className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
//                           role='menuitem'
//                         >
//                           {category}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Hamburger Menu - Mobile */}
//             <button
//               onClick={() => setIsSideDrawerOpen(true)}
//               className='font-nunito'
//             >
//               <Menu className='h-6 w-6' />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Side Drawer */}
//       <SideDrawer />
//       <style jsx='true'>{`
//         body.modal-open {
//           overflow: var(--modal-open-overflow);
//           padding-right: var(--modal-open-padding-right);
//         }
//       `}</style>
//     </nav>
//   )
// }

import { useState, useEffect } from 'react'
import { Search, ChevronDown, ChevronUp, Menu, X } from 'lucide-react'

const modalOpenClass = 'modal-open'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

  const categories = [
    'Directing',
    'Acting',
    'Screenwriting',
    'Cinematography',
    'Film Editing',
    'Production Design',
    'Sound Design',
    'Visual Effects',
    'Costume Design',
    'Makeup & Hair',
    'Film Scoring',
    'Film Production',
  ]

  const popularSearches = [
    'Directing',
    'Genevieve Nnaji',
    'Screenwriting',
    'Kunle Afolayan',
    'Film Editing',
    'Kemi Adetiba',
    'Visual Effects',
    'Ramsey Nouah',
  ]

  useEffect(() => {
    return () => {
      document.body.classList.remove(modalOpenClass)
    }
  }, [])

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
    if (isSearchFocused) setIsSearchFocused(false)
    document.body.classList.toggle(modalOpenClass, !isDropdownOpen)
  }

  const handleSearchFocus = () => {
    setIsSearchFocused(true)
    if (isDropdownOpen) setIsDropdownOpen(false)
  }

  const SideDrawer = () => (
    <div
      className={`fixed inset-0 bg-black z-50 transform ${
        isSideDrawerOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className='h-full overflow-y-auto font-nunito'>
        <div className='p-4 font-nunito'>
          <div className='flex justify-between items-center mb-6 font-nunito'>
            <h2 className='text-xl font-bold font-nunito'>Menu</h2>
            <button
              onClick={() => setIsSideDrawerOpen(false)}
              className='font-nunito'
            >
              <X className='h-6 w-6' />
            </button>
          </div>
          <div className='mb-6 font-nunito'>
            <div className='relative font-nunito'>
              <div className='absolute inset-y-0 left-2 flex items-center pointer-events-none'>
                <Search className='h-5 w-5 text-gray-400' />
              </div>
              <input
                type='search'
                placeholder='Search classes, instructors, sessions and more'
                className='block w-full bg-[#161616] border border-transparent rounded-md py-2 pl-9 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:bg-[#202020] focus:border-gray-500 focus:ring-1 focus:ring-gray-500 font-nunito'
                onFocus={handleSearchFocus}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
            </div>
            {isSearchFocused && (
              <div className='mt-2 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 z-50 font-nunito'>
                <div
                  className='py-1 font-nunito'
                  role='menu'
                  aria-orientation='vertical'
                >
                  <div className='px-4 py-2 text-sm text-gray-400 font-nunito'>
                    Popular Searches
                  </div>
                  {popularSearches.map((search) => (
                    <a
                      key={search}
                      href='#'
                      className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
                      role='menuitem'
                    >
                      {search}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='space-y-6 font-nunito'>
            <a
              href='/plans'
              className='block text-lg hover:text-gray-300 font-nunito'
            >
              View Plans
            </a>
            <a
              href='/gifts'
              className='block text-lg hover:text-gray-300 md:hidden font-nunito'
            >
              Gifts
            </a>
            <a
              href='/support'
              className='block text-lg hover:text-gray-300 md:hidden font-nunito'
            >
              Support
            </a>
            <a
              href='/login'
              className='block text-lg hover:text-gray-300 font-nunito'
            >
              Log In
            </a>
            <div className='my-6 text-center font-nunito'>
              <p className='text-lg font-semibold'>Learn something new today</p>
              <p className='text-sm text-gray-400'>
                Get all 200+ classes across 11 categories.
              </p>
            </div>
            <a
              href='/signup'
              className='block w-full text-center px-4 py-2 border border-transparent text-lg font-medium rounded-md text-black bg-[#CCFF00] hover:bg-[#A3CC00] transition-colors font-nunito'
            >
              Sign Up
            </a>
            <p className='mt-2 text-sm text-center text-gray-400 font-nunito'>
              Starting at $5/month (billed annually)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  useEffect(() => {
    document.body.classList.add(modalOpenClass)
    return () => {
      document.body.classList.remove(modalOpenClass)
    }
  }, [])
  return (
    <nav
      className='bg-black text-white font-nunito relative'
      style={{
        '--modal-open-overflow': 'hidden',
        '--modal-open-padding-right': '15px', // Adjust this value based on the width of your scrollbar
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <a href='/' className='flex-shrink-0 font-nunito'>
            <svg
              width='120'
              height='32'
              viewBox='0 0 120 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <text
                x='5'
                y='24'
                fontFamily='Arial, sans-serif'
                fontSize='24'
                fontWeight='bold'
                fill='#CCFF00'
              >
                NMC
              </text>
            </svg>
          </a>

          {/* Browse - Desktop */}
          <div className='hidden md:flex relative ml-6 h-full items-center'>
            <div className='relative'>
              <button
                className='flex items-center text-sm font-medium hover:text-gray-300 font-nunito'
                onClick={handleDropdownToggle}
              >
                Browse
                {isDropdownOpen ? (
                  <ChevronUp className='ml-1 h-4 w-4' />
                ) : (
                  <ChevronDown className='ml-1 h-4 w-4' />
                )}
              </button>
              <div className='absolute h-4 w-full left-0 bottom-[-16px]' />
              {isDropdownOpen && (
                <div className='absolute top-full left-0 mt-4 w-56 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 z-50 font-nunito'>
                  <div
                    className='py-1 font-nunito'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='options-menu'
                  >
                    {categories.map((category) => (
                      <a
                        key={category}
                        href='#'
                        className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
                        role='menuitem'
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search and Navigation - Desktop */}
          <div className='hidden md:flex items-center flex-1'>
            <div className='flex-1 max-w-2xl mr-6 relative font-nunito'>
              <div className='relative font-nunito'>
                <div className='absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none'>
                  <Search className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  type='search'
                  placeholder='Search classes, instructors, sessions and more'
                  className='block w-full bg-[#161616] border border-transparent rounded-md py-2 pl-16 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-[#202020] focus:border-gray-500 focus:ring-1 focus:ring-gray-500 ml-4 font-nunito'
                  onFocus={handleSearchFocus}
                  onBlur={() =>
                    setTimeout(() => setIsSearchFocused(false), 200)
                  }
                />
              </div>
              {isSearchFocused && (
                <div className='absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 z-50 font-nunito'>
                  <div
                    className='py-1 font-nunito'
                    role='menu'
                    aria-orientation='vertical'
                  >
                    <div className='px-4 py-2 text-sm text-gray-400 font-nunito'>
                      Popular Searches
                    </div>
                    {popularSearches.map((search) => (
                      <a
                        key={search}
                        href='#'
                        className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
                        role='menuitem'
                      >
                        {search}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className='flex items-center space-x-6 ml-auto font-nunito'>
              <a
                href='/plans'
                className='text-sm hover:text-gray-300 font-nunito'
              >
                View Plans
              </a>
              <a
                href='/login'
                className='text-sm hover:text-gray-300 font-nunito'
              >
                Log In
              </a>
              <a
                href='/signup'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-[#CCFF00] hover:bg-[#A3CC00] transition-colors font-nunito'
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className='flex items-center md:hidden'>
            {/* Browse - Mobile */}
            <div className='relative mr-2'>
              <div className='relative'>
                <button
                  className='flex items-center text-sm font-medium hover:text-gray-300 font-nunito'
                  onClick={handleDropdownToggle}
                >
                  Browse
                  {isDropdownOpen ? (
                    <ChevronUp className='ml-1 h-4 w-4' />
                  ) : (
                    <ChevronDown className='ml-1 h-4 w-4' />
                  )}
                </button>
              </div>
              {isDropdownOpen && (
                <div className='fixed inset-0 bg-black z-[60] overflow-y-auto font-nunito'>
                  <div className='p-4 font-nunito'>
                    <div className='flex justify-between items-center mb-4 font-nunito'>
                      <h2 className='text-xl font-bold font-nunito'>Browse</h2>
                      <button
                        onClick={() => setIsDropdownOpen(false)}
                        className='font-nunito'
                      >
                        <X className='h-6 w-6' />
                      </button>
                    </div>
                    <div
                      className='py-1 font-nunito'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='options-menu'
                    >
                      {categories.map((category) => (
                        <a
                          key={category}
                          href='#'
                          className='block px-4 py-2 text-sm text-white hover:bg-white/30 font-nunito'
                          role='menuitem'
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsSideDrawerOpen(true)}
              className='font-nunito'
            >
              <Menu className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      <SideDrawer />
      <style jsx='true'>{`
        body.modal-open {
          overflow: var(--modal-open-overflow);
          padding-right: var(--modal-open-padding-right);
        }
      `}</style>
    </nav>
  )
}
