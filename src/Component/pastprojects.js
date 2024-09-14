import React, { useState, useEffect } from 'react';
import './PastProjects.css';

const PastProjects = () => {
  const data = [
    {
      img: './project_images/proj_2.jpg',
      head: 'Direct Connect',
      des: "A fintech company dedicated to putting the internet in the hands of users & make it safer for individuals and businesses.",
      link: 'https://directconnect.vercel.app/',
    },
    {
      img: './project_images/proj_3.jpg',
      head: 'StartUp Nix',
      des: "Analyze and validate your Business Ideas in a snap and watch as a detailed report lands in your lap.",
      link: 'https://siyal-huzaifasid.vercel.app/',
    },
    {
      img: './project_images/proj_4.jpg',
      head: 'Slidey',
      des: "Your Design Partner! Transforming Presentations into Powerful Narratives!",
      link: 'https://www.slidey.io/',
    },
    {
      img: './project_images/proj_1.jpg',
      head: 'GoGreenBooty',
      des: "A compact, easy-to-install enhancement for your toilet, akin to a small shower head tailored for your personal hygiene.",
      link: 'https://www.gogreenbooty.com/',
    },
    {
      img: './project_images/proj_6.jpg',
      head: 'Moakhat',
      des: "A global initiative launched by civil society organizations to support needy families in Gaza.",
      link: 'https://moakhat.org/en',
    },
    {
      img: './project_images/proj_7.jpg',
      head: 'Ocean Dev',
      des: "Leading the way in artificial intelligence to drive innovation and create positive impact on society.",
      link: 'https://oceandevfrontend.vercel.app/',
    },
    {
      img: './project_images/proj_8.jpg',
      head: 'Meena Bazaar',
      des: "Embrace majesty with Meena Bazaar by Taj Bridal Collection - where luxury meets tradition.",
      link: 'https://www.meenabazaarbytaj.co.uk/',
    },
    {
      img: './project_images/proj_10.jpg',
      head: 'Solena',
      des: "Join the Future of Solena.",
      link: 'https://solana-project-chi.vercel.app/',
    },
    {
      img: './project_images/proj_9.jpg',
      head: 'Euphoria',
      des: "Discover, Collect & Sell Extraordinary NFTs Art.",
      link: 'https://solana-project-chi.vercel.app/',
    },
    {
      img: './project_images/proj_5.jpg',
      head: 'AML platform',
      des: "An anti-money laundering platform for monitoring financial transactions.",
      link: 'https://aml-platform-frontend.vercel.app/',
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3); // Show first 3 projects initially
  const [animating, setAnimating] = useState(false);
  const [showAll, setShowAll] = useState(false); // Toggle state for "Show More"

  useEffect(() => {
    let timeoutIds = [];

    if (showAll && visibleProjects < data.length && !animating) {
      setAnimating(true); // Prevent multiple triggers
      // Reveal additional projects one by one
      for (let i = 3; i < data.length; i++) {
        const timeoutId = setTimeout(() => {
          setVisibleProjects((prevVisible) => prevVisible + 1);
          if (i === data.length - 1) {
            setAnimating(false); // Animation complete for all projects
          }
        }, (i - 3) * 300); // Adjust the timing here, e.g., 300ms per card
        timeoutIds.push(timeoutId);
      }
    }

    return () => {
      // Clear timeouts on cleanup to avoid memory leaks
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [showAll, animating, data.length, visibleProjects]);

  const toggleShowAll = () => {
    if (showAll) {
      setVisibleProjects(3); // Reset to initial 3 if "Show Less" is clicked
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to #projects
    }else{
      setVisibleProjects(data.length) // show all
    }
    setShowAll(!showAll);
  };

  return (
    <div id="projects" className="pt-10">
      <div>
        <h2 className="text-center text-3xl font-bold tracking-wide mb-8 text-[rgb(79,70,229)]">
          PAST PROJECTS
        </h2>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl px-6">
        {/* For initial 3 data elements */}
        {data.slice(0, 3).map((project, index) => (
          <article
            key={project.head}
            onClick={() => window.open(project.link)}
            className="project-card relative rounded-xl shadow-lg bg-white hover:shadow-xl transform transition-transform duration-300 hover:scale-105 hover:bg-[rgb(243,244,246)] cursor-pointer overflow-hidden"
            style={{ animationDelay: `${index * 0.2}s` }} // Apply animation delay based on index
          >
            <div className="h-full flex flex-col overflow-hidden">
              <figure className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.head}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </figure>

              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-[rgb(79,70,229)] mb-4">{project.head}</h2>
                <p className="text-sm text-justify flex-grow text-[rgb(55,65,81)]">{project.des}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center text-[rgb(79,70,229)] font-bold"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-5 h-5 transform transition-transform translate-x-0 opacity-0 hover:translate-x-1 hover:opacity-100"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* For all except first 3 */}
        {data.slice(3, visibleProjects).map((project, index) => (
          <article
            key={project.head}
            onClick={() => window.open(project.link)}
            className="project-card relative rounded-xl shadow-lg bg-white hover:shadow-xl transform transition-transform duration-300 hover:scale-105 hover:bg-[rgb(243,244,246)] cursor-pointer overflow-hidden"
            style={{ animationDelay: `${index * 0.3}s` }} // Apply animation delay based on index
          >
            <div className="h-full flex flex-col overflow-hidden">
              <figure className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.head}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </figure>

              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-[rgb(79,70,229)] mb-4">{project.head}</h2>
                <p className="text-sm text-justify flex-grow text-[rgb(55,65,81)]">{project.des}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center text-[rgb(79,70,229)] font-bold"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-5 h-5 transform transition-transform translate-x-0 opacity-0 hover:translate-x-1 hover:opacity-100"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="text-center mt-8">
        <button
          onClick={toggleShowAll}
          className="px-6 py-2 bg-[rgb(79,70,229)] text-white font-semibold rounded-md shadow-md hover:bg-[rgb(67,56,202)] transition-colors duration-300"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default PastProjects;
