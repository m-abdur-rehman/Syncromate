
import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './header.css';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '#header' },
  { name: 'About', href: '#about' },
  { name: 'Our Solutions', href: '#projects' },
  { name: 'Company', href: '#contact' },
]


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const headerHeight = document.getElementById('header').offsetHeight

      // If the user has scrolled past the height of the header, fix the navbar
      if (scrollPosition > headerHeight) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="header">
      <header className={`inset-x-0 top-0 z-50 transition duration-200 sm:duration-500 ${isScrolled ? 'fixed bg-white shadow-md' : 'absolute bg-transparent'}`}>
        <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-6" id="nav">
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">SyncroMate</span>
              <img
                alt="SyncroMate logo"
                src="logo_transparent.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden lg:gap-x-12">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-6 text-gray-900 px-4 py-2 transition duration-300 ease-in-out hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50 hover:rounded-lg hover:scale-110"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="text-base font-semibold leading-6 text-gray-900 px-4 py-2 transition duration-300 ease-in-out hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50 hover:rounded-lg hover:scale-110"
            >
              Meet with Us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SyncroMate</span>
                <img
                  alt="SyncroMate logo"
                  src="logo_transparent.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Meet With Us
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}

export default Header;