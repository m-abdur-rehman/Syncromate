import { WrenchIcon, StarIcon, DevicePhoneMobileIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'
import './about.css';

const features = [
  {
    name: 'Experience',
    description:
      'Our exceptional team brings extensive experience and proven expertise to every project.',
    icon: StarIcon,
  },
  {
    name: 'Quick Support',
    description:
      'Get fast, reliable assistance anytime with our dedicated quick support team.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Maintenance',
    description:
      'Efficiently handle all your maintenance needs with our expert solutions.',
    icon: WrenchIcon,
  },
  {
    name: 'Seamless Integration',
    description:
      'Effortlessly connect and streamline your systems with our integrated solutions.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function About() {
  return (
    <div className="py-20 sm:py-20 sm:pb-20" id="about">  
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl lg:flex lg:items-center lg:gap-x-8">
      {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
  {/* Left section */}
  <div className="lg:w-1/2 lg:h-54 lg:ml-[-20px]">
    <h2 className="text-[36px] sm:text-[50px] font-bold leading-tight text-indigo-600 border-2 border-gray-900 p-8 sm:p-16 rounded-none text-center">
    Why <img src='logo_transparent.png'></img>
    </h2>
  </div>
        
  {/* Right section */}
  <div className="lg:w-1/2">
    <p className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
    Your Trusted Partner in Delivering Software Solutions
    </p>
    <p className="pt-4 text-lg leading-8 text-gray-600 text-center text-justify">
    At SyncroMate, we’re reshaping the digital transformation landscape by providing innovative, 
    cost-effective solutions for businesses. SyncroMate connects leading expertise with innovative software solutions,
    enabling businesses globally to thrive and expand effortlessly in the digital age.
    </p>
  </div>
</div>

      

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 text-justify">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}