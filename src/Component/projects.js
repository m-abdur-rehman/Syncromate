// const posts = [
//     {
//       id: 1,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     //   date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Michael Foster',
//         role: 'Co-Founder / CTO',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     // More posts...
//   ]
  
//   export default function Projects() {
//     return (
//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-5xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
//             <p className="mt-2 mb-4 text-lg leading-8 text-gray-600">
//               Syncromate has succefully completed major projects for clients.
//             </p>
//           </div>
//           {/* <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-2 sm:mt-4 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//             {posts.map((post) => (
//               <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
//                 <div className="flex items-center gap-x-4 text-xs">
//                   <time dateTime={post.datetime} className="text-gray-500">
//                     {post.date}
//                   </time>
//                   <a
//                     href={post.category.href}
//                     className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
//                   >
//                     {post.category.title}
//                   </a>
//                 </div>
//                 <div className="group relative">
//                   <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
//                     <a href={post.href}>
//                       <span className="absolute inset-0" />
//                       {post.title}
//                     </a>
//                   </h3>
//                   <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
//                 </div>
//                 <div className="relative mt-8 flex items-center gap-x-4">
//                   <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
//                   <div className="text-sm leading-6">
//                     <p className="font-semibold text-gray-900">
//                       <a href={post.author.href}>
//                         <span className="absolute inset-0" />
//                         {post.author.name}
//                       </a>
//                     </p>
//                     <p className="text-gray-600">{post.author.role}</p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div> */}
//         </div>
//               <div
//         class="mx-auto flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//         <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
//             alt="ui/ux review check" />
//         </div>
//         <div class="p-6">
//           <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
//             UI/UX Review Check
//           </h4>
//           <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
//             Because it&apos;s about motivating the doers. Because I&apos;m here to
//             follow my dreams and inspire others.
//           </p>
//         </div>
//         <div class="flex items-center justify-between p-6">
//           <div class="flex items-center -space-x-3">
//             <img alt="natali craig"
//               src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
//               class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
//             <img alt="Tania Andrew"
//               src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
//               class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
//           </div>
//           <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
//             January 10
//           </p>
//         </div>
//       </div> 
//     </div>
//     )
//   }
  
import React from 'react';

const Projects = () => {
  const cardData = [
    {
      title: 'Web Development',
      description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      title: 'Generative AI',
      description: "Speed up your product development by running design sprints with your team.",
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      title: 'Chat Bots',
      description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      title: 'Third party Integrations',
      description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },    {
      title: 'Mobile App Development',
      description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    }
    // Add more card data here...
  ];

  return (
    <div className="bg-white sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-left text-center">Our Projects</h2>
             <p className="mt-2 mb-4 text-lg leading-8 text-gray-600 sm:text-left text-center py-4">
               Syncromate has succefully completed major projects for clients.
             </p>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div key={index} className="flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img src={card.imageUrl} alt="ui/ux review check" />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {card.title}
            </h4>
            <p className="block mt-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 text-justify">
              {card.description}
            </p>
          </div>
          {/* <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              {card.avatars.map((avatar, i) => (
                <img key={i} alt={`avatar ${i}`} src={avatar} className="relative inline-block h-8 w-8 !rounded-full border-2 border-white object-cover object-center hover:z-10" />
              ))}
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-relaxed text-inherit">
              {card.date}
            </p>
          </div> */}
        </div>
      ))}
      
  </div>
  <div className="mt-12 text-center">
      <a
        href="#"
        className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-500/50 focus:outline-none focus:ring focus:ring-indigo-500/50"
      >
        Get Started Today
      </a>
    </div>
  </div>
  </div>
  );
};

export default Projects;

