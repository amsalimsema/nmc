import React from 'react'
//import { CenterTitle } from './Headings'

import KFC from '../assets/kfc_logo.png'
import ARADEL from '../assets/aradel_logo.png'
import PSI from '../assets/psi_logo.png'
import CENTE from '../assets/cente_logo.png'
import ECO from '../assets/ECO HD.png'
import NGX from '../assets/ngx_logo.png'
import UAP from '../assets/uap_logo.png'
//import AIRTEL from '../assets/airtel-logo.png'
// import CENTE from '../assets/centenary-bank-logo.png'
// import PSI from '../assets/psi-logo.png'
//import RUBIS from '../assets/RUBIS.png'
import TECNO from '../assets/TECHNO.png'

const clientLogos = [
  {
    src: KFC,
    alt: 'kfC',
  },
  {
    src: ARADEL,
    alt: 'ARADEL',
  },
  {
    src: ECO,
    alt: 'ECO',
  },
  {
    src: UAP,
    alt: 'UAP',
  },
  {
    src: NGX,
    alt: 'NGX',
  },

  {
    src: CENTE,
    alt: 'CENTE',
  },
  {
    src: PSI,
    alt: 'PSI',
  },
  {
    src: TECNO,
    alt: 'TECNO',
  },
]

export default function ClientLogoMarquee() {
  return (
    <div className='w-full sm:ml-[100px] sm:w-[calc(100%-100px)] mx-auto bg-white'>
      {/* <div className='mt-4 md:mt-6 sm:mb-8 text-center'>
        <CenterTitle ct='Some of our clients' />
      </div> */}
      <section
        className='w-full overflow-hidden py-12'
        aria-labelledby='client-heading'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='relative w-full'>
            <div
              className='flex space-x-6 sm:space-x-12'
              style={{
                animation: 'marquee 40s linear infinite',
                whiteSpace: 'nowrap',
              }}
            >
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center w-20 sm:w-32 flex-shrink-0'
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className='p-0 md:p-0 h-16 w-26 object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* h-20 w-20 sm:h-16 sm:w-16  */}
        <style jsx='true'>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </div>
  )
}

// import { CenterTitle } from './Headings'
// import KFC from '../assets/kfc_logo.png'
// import ARADEL from '../assets/aradel_logo.png'
// //import PSI from '../assets/psi_logo.png'
// // import CENTE from '../assets/cente_logo.png'
// import ECO from '../assets/ECO HD.png'
// import NGX from '../assets/ngx_logo.png'
// import UAP from '../assets/uap_logo.png'
// import AIRTEL from '../assets/airtel-logo.png'
// import CENTE from '../assets/centenary-bank-logo.png'
// import PSI from '../assets/psi-logo.png'

// export default function ClientLogos() {
//   const Clients = [
//     { name: 'KFC', logo: KFC },
//     { name: 'psi', logo: PSI },
//     { name: 'centenary', logo: CENTE },
//     { name: 'eco bank', logo: ECO },
//     { name: 'aradel', logo: ARADEL },
//     { name: 'ngx', logo: NGX },
//     { name: 'uap', logo: UAP },
//     { name: 'airtel', logo: AIRTEL },
//   ]

//   return (
//     <div className='w-full sm:ml-[100px] sm:w-[calc(100%-100px)]'>
//       <div className='container mx-auto px-10'>
//         <section className='pt-5 sm:pt-10 pb-10 sm:pb-20 bg-white'>
//           <div className='mb-4 sm:mb-8 text-center'>
//             <CenterTitle ct='Some of Our Clients' />
//           </div>

//           <div className='min-width-full'>
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 items-center'>
//               {Clients.map((client, index) => (
//                 <div key={index} className='flex justify-center mb-2 sm:mb-5'>
//                   <img
//                     src={client.logo}
//                     alt={`${client.name} logo`}
//                     className='object-contain filter grayscale hover:grayscale-0 hover:scale-95 transition-all duration-300 h-auto w-full max-w-[120px] max-h-[80px] pb-4'
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }
