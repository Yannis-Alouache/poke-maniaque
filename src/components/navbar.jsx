import React, {useState} from 'react'
import logo from "../assets/logo.png"

function Navbar() {

  let [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
        <nav className="bg-transparent">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center min-[875px]:hidden">
                    {/* mobile btn menu */}
                    <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        {/* <!--
                            Icon when menu is closed.

                            Menu open: "hidden", Menu closed: "block"
                        --> */}
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/* <!--
                            Icon when menu is open.

                            Menu open: "block", Menu closed: "hidden"
                        --> */}
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center items-center min-[875px]:items-stretch min-[875px]:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <a href="/">
                            <img className="h-11 w-auto" src={logo} alt="Your Company" />
                        </a>
                    </div>
                </div>
                <div className="hidden min-[875px]:absolute min-[875px]:inset-y-0 min-[875px]:right-0 min-[875px]:flex min-[875px]:items-center min-[875px]:static min-[875px]:inset-auto min-[875px]:ml-6 min-[875px]:pr-0">
                    <div className="relative ml-3">
                        <div className="relative mx-auto text-gray-600">
                            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={mobileMenuOpen ? "block" : "hidden"} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <div className="relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg w-full text-sm focus:outline-none" type="search" name="search" placeholder="Search"/>
                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar