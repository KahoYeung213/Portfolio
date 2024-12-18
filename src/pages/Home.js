import React from 'react';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => {
    const programmingSkills = [
        { name: 'C#', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
        { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
        { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
        { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
        { name: 'React.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    ];

    return (
        <div className="bg-gradient-radial from-violet-800 to-black min-h-screen">
            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/_DSC1307.jpg')" }}>
                    <div className="bg-black bg-opacity-50 h-full w-full"></div>
                </div>
                <div className="relative z-10 p-5">
                    <h1 className='text-6xl text-white'>Welcome</h1>
                    <h2 className='text-xl text-white'>My name is Kaho Yeung, I am currently a 3rd year student in IADT studying Creative Computing.
                        I am mainly a front end developer.
                    </h2>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='text-xl text-white'>Programming Skills:</h2>
                <div className='grid grid-cols-6 gap-4 mt-4'>
                    {programmingSkills.map((skill, index) => (
                        <div key={index} className='flex flex-col items-center text-white'>
                            <img src={skill.logo} alt={`${skill.name} logo`} className='w-16 h-16 mb-2' />
                            <span className='text-xl'>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* contact part */}
            <div id="contact">
                <h2 className='mt-5 text-3xl text-white'>Contact</h2>
                <p>Email: Kahoyeung1@hotmail.com</p>
                <a href="https://github.com/KahoYeung213" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                </a>
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
                <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg'>
                    <ProjectCarousel />
                </div>
            </div>
        </div>
    );
};

export default Home;