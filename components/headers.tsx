import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
// export default function Header() {
//   return (
//     <div>
//       <nav className="bg-blue-300 py-4 px-8">
//         <div className="flex items-center justify-between container">
//           <div className="flex items-center font-bold">
//             <Link href="/">
//               <div className="text-lg text-white">Portfolio</div>
//             </Link>
//           </div>
//           <div className="flex items-center font-bold">
//             <SignedOut>
//               <div className="text-gray-300 hover:text-white mr-4">
//                 <SignInButton />
//               </div>
//               <div className="text-gray-300 hover:text-white mr-4">
//                 <SignUpButton />
//               </div>
//             </SignedOut>{' '}
//             <SignedIn>
//               <Link
//                 href="/profile"
//                 className="text-gray-300 hover:text-white mr-4"
//               >
//                 Profile
//               </Link>
//               <Link
//                 href="/dashboard"
//                 className="text-gray-300 hover:text-white mr-4"
//               >
//                 Dashboard-Server
//               </Link>
//               <div className="text-gray-300 hover:text-white mr-4">
//                 <UserButton />
//               </div>
//               <div className="text-gray-300 hover:text-white mr-4">
//                 <SignOutButton />
//               </div>
//             </SignedIn>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

const Header = () => {
  return (
    <header
      style={{
        height: '60px',
        backgroundColor: 'rgba(238, 238, 238, 0)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        padding: '10px 20px',
      }}
    >
      <div className="text-orange-600 font-bold text-2xl">MY PORTFOLIO</div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="/#home" className="text-black hover:text-orange-600 mr-4">
          Home
        </a>
        <a href="/#profile" className="text-black hover:text-orange-600 mr-4">
          About
        </a>
        <a href="/#project" className="text-black hover:text-orange-600 mr-4">
          Project
        </a>
        <a href="/#contact" className="text-black hover:text-orange-600 mr-4">
          Contact
        </a>

        <div className="flex">
          <SignedOut>
            <div className="text-black hover:text-orange-600 mr-4">
              <SignInButton />
            </div>
            <div className="text-black hover:text-orange-600 mr-4">
              <SignUpButton />
            </div>
          </SignedOut>{' '}
          <SignedIn>
            <Link
              href="/profile"
              className="text-black hover:text-orange-600 mr-4"
            >
              Profile
            </Link>
            <div className="text-black hover:text-orange-600 mr-4">
              <UserButton />
            </div>
            <div className="text-black hover:text-orange-600 mr-4">
              <SignOutButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}

export default Header
