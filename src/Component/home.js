
import { useState } from 'react'
import './header.css';


const Home = () => {
  return (
    <div className="bg-white" id="header">
      <div className="relative isolate px-6 pt-14 lg:px-8 mb-[-32px]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:pt-30 lg:pb-0 lg:h-[95dvh]">

          <div className="text-center">
            <h1 className="text-4xl mb-8 mt-8 font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Your Ideas Into Reality
            </h1>
            <p className="sm:mt-2 text-md md:text-lg lg:mt-6 sm:mb-10 text-lg leading-8 text-gray-600 text-justify md:hidden">
              SyncroMate is a technology-driven company specializing in cutting-edge Generative AI, advanced chatbots, and dynamic e-commerce solutions. We develop and integrate innovative applications that empower businesses to stay ahead in a rapidly evolving digital landscape. At SyncroMate, we transform your vision into reality with the latest in AI and digital commerce technologies.
            </p>
            <p className="sm:mt-2 text-md md:text-lg lg:mt-6  text-lg leading-8 text-gray-600 text-justify hidden md:block">
              SyncroMate is a technology-driven company specializing in cutting-edge Generative AI, advanced chatbots, and dynamic e-commerce solutions. We develop and integrate innovative applications that empower businesses to stay ahead in a rapidly evolving digital landscape. Our solutions are designed for seamless implementation within your existing infrastructure, offering enhanced functionality with a more efficient cost of ownership compared to traditional providers. At SyncroMate, we transform your vision into reality with the latest in AI and digital commerce technologies.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
          </div>
          <div className="mt-10 mt-10 mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-back-900/10 hover:ring-gray-900/20">
              Learn more About SyncroMate. {' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
export default Home;
